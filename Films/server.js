/* 
 * Copyright (C) 2015 antony
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * Il framework 'Express' fornisce un numero di astrazioni di concetti ed
 * applicazioni server.
 * Qui sotto come primo passo si fa richiesta dei moduli 'express', 'q', 'mysql'
 * e 'body-parser' che saranno usati dopo.
 */
var express = require('express');
var q = require('mysql-promise')();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var exp = express();

/*
 * Qui si fa uso della directory /public del percorso relativo dato dalla
 * variabile '__dirname'. Ci saranno tutti i file dell'applicazione che saranno
 * usati da 'Express', quindi dal 'Web Server'.
 */
exp.use(express.static(__dirname + '/public'));

/*
 * Avvio il server mettendolo in ascolto sulla porta 3000.
 */
exp.listen(3000);
console.log("Server in ascolto su localhost:3000");

/*
 * Faccio uso dell'oggetto 'bodyParser' chiamando 'bodyParser.urlencoded' il
 * quale funge da parser che decodifica il 'body' di un template HTML e crea un
 * oggetto di nome 'body' che conterrà a sua volta i dati che trova scandendo il
 * nostro HTML. Quest'oggetto 'body' sarà appesso all'oggetto 'request'
 * consentendo di richiamarlo quando serve. Esso è strutturato in modo da
 * contenere coppie di 'key-value', dove il 'value' sarà una string o un array,
 * se l'opzione 'extended' è false o qualsiasi altro tipo se è true.
 */
exp.use(bodyParser.urlencoded({
    extended: true
}));

/*
 * Creo la connessione al DataBase mysql. Da notare che bisogna inizializzare
 * user e password con i propri parametri di login.
 */
q.configure({
    host: 'localhost',
    user: 'user',
    password: 'password'
});

/*
 * Metodo POST richiamato dalla FORM che si trova in insert.html. Qui viene
 * sfruttato il 'bodyParser' per ottenere le variabili della FORM e inserirle
 * nel DataBase tramite una query di inserimento.
 * Infine la funzione 'res.redirect()' indirizzerà alla pagina success.html che
 * visualizzerà un messaggio di conferma dell'avvenuto inserimento nel DataBase.
 * Una delle caratteristiche utilizzate in JavaScript è il supporto alla
 * programmazione asincrona, cioè alla possibilità di eseguire attività in
 * background che non interferiscono con il flusso di elaborazione principale.
 * Tuttavia, in determinate situazioni e soprattutto al crescere della
 * complessità dell'applicazione, il codice può risultare di difficile gestione.
 * Per sfruttare tale programmazione asincrona si fa uso delle cosiddette
 * funzioni di callback che saranno molto utili in situazioni piuttosto
 * semplici, ma se avessimo situazioni più complesse complicherebbero la vita
 * del programmatore come ad esempio una scarsa leggibilità del codice oppure
 * la difficoltà di composizione delle callback e di sincronizzazione del flusso
 * di elaborazione o ancora la difficoltà di gestione degli errori e di debug.
 * In sostanza, a differenza delle chiamate a funzioni sincrone dalla cui
 * esecuzione attendiamo un valore di ritorno o un’eccezione, nel caso di
 * chiamate asincrone non abbiamo nessuna delle due cose.
 * In questo contesto possono darci una mano le Promise che rappresentano
 * appunto una promessa affinché un risultato verrà fornito non appena
 * disponibile. Una Promise può trovarsi in stato di 'pending' dove non è stato
 * ancora ottenuto il risultato della chiamata asincrona; in stato di 'resolved'
 * o 'fullfilled' in cui la chiamata asincrona ha prodotto un risultato; in
 * stato di 'rejected' in cui non è possibile ottenere un risultato dalla
 * chiamata asincrona, eventualmente per il verificarsi di una condizione
 * d'errore. Il vantaggio dell'utilizzo delle Promise rispetto alle callback
 * consiste nel rendere il codice più leggibile, più simile al flusso di
 * esecuzione sincrona e in alcune situazioni anche più efficiente.
 * Sotto si nota l'uso del metodo query che ritorna appunto una Promise che
 * viene invocata e concatenata tramite il metodo 'spread()' alla funzione da
 * eseguire subito dopo. Il risultato dell'operazione asincrona viene
 * automaticamente passato alla funzione invocata tramite 'spread()' la quale
 * passa un elenco di risultati alla funzione, riuscendo a sincronizzare e
 * combinare insieme più chiamate asincrone. Simile al metodo 'spread()' è il
 * metodo 'then()' che, invece di passare un elenco di risultati, riesce a
 * passarne soltanto uno singolo.
 * In conclusione una 'Promise' è un risultato che verrà reso disponibile (col
 * metodo 'then()' o 'spread()') non appena possibile, se è in grado di
 * mantenere la promessa, oppure è un errore se non la si può mantenere.
 */
exp.post('/save', function(req, res) {
    var title = addslashes(req.body.title);
    var year = req.body.year;
    var duration = req.body.duration;
    var color = req.body.color;
    var audio = req.body.audio;
    var category = req.body.category;
    var direction = addslashes(req.body.direction);
    var actors = addslashes(req.body.actors);
    var qr = "INSERT INTO filmDB.film (title, year, duration, color, audio, category, direction, actors)" +
             "VALUES ('" + title + "', '" + year + "', '" + duration + "', '" + color +
              "', '" + audio + "', '" + category + "', '" + direction + "', '" + actors + "')";
    q.query(qr).spread(function(rows) {
        console.log('insert ok...');
    });
    res.redirect('/success.html');
});

/*
 * Metodo GET richiamato dal 'Controller' loadCtrl.js a sua volta richiamato da
 * display.html. Si fa una query di selezione della tabella 'film' nel DataBase
 * 'filmDB'.
 * Si fa uso anche qui delle Promise.
 */
var result;
exp.get('/load', function(req, res) {
    var qr = "SELECT * FROM filmDB.film";
    q.query(qr).spread(function(film) {
        result = film;
    });
    res.send(result);
});


/*
 * Metodo che aiuta a quotare i caratteri speciali di una stringa per inserirli
 * nel DataBase.
 */
function addslashes(str) {
    str = str.replace(/\\/g, '\\\\');
    str = str.replace(/\'/g, '\\\'');
    str = str.replace(/\"/g, '\\"');
    str = str.replace(/\0/g, '\\0');
    return str;
}
