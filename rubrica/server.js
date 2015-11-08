/*
 * This file is part of Rubrica.
 *
 * Rubrica is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Rubrica is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Rubrica. If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * Il framework 'Express' fornisce un numero di astrazioni di concetti ed
 * applicazioni server.
 * Qui sotto come primo passo si fa richiesta dei moduli 'express', 'mysql' e
 * 'body-parser' che saranno usati dopo.
 */
var express = require('express');
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
 * se l'opzione 'extended' è false o qualsiasi altro tipo se è false.
 */
exp.use(bodyParser.urlencoded({
    extended: true
}));

/*
 * Creo la connessione al DataBase mysql. Da notare che bisogna inizializzare
 * user e password con i propri parametri di login.
 */
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'reti11'
});

/*
 * Metodo GET richiamato dal controller 'loadController.js'. Qui viene
 * effettuata una query di selezione di tutti gli utenti presenti nella tabella
 * 'utente' del DataBase 'rubricaDB'. I risultati verranno inseriti nell'oggetto
 * 'rows' che verrà poi inviato alla posizione '/load' (la richiesta a questo
 * indirizzo verrà fatta dal controller 'loadController.js').
 */
exp.get('/load', function(req, res) {
    var qr = "SELECT * FROM rubricaDB.utente";
    connection.query(qr, function(err, rows) {
        if (err) {
            console.error('error connecting: '+ err.stack);
            return;
        }
        res.send(rows);
    });
});

/*
 * Metodo POST richiamato dalla FORM che si trova in index.html. Qui viene
 * sfruttato il 'bodyParser' per ottenere le variabili della FORM e inserirle
 * nel DataBase tramite una query di inserimento.
 * Infine la funzione 'res.redirect()' indirizzerà alla pagina confirm.html che
 * visualizzerà un messaggio di conferma dell'avvenuto inserimento nel DataBase.
 * In caso di errore invece verrà stampato su console un messaggio di errore.
 */
exp.post('/signup', function(req, res) {
    console.log('Starting POST request...');
    var name = req.body.name;
    var surname = req.body.surname;
    var phone = req.body.phone;
    var email = req.body.email;
    var qr = "INSERT INTO rubricaDB.utente (nome, cognome, telefono, email)" +
             "VALUES ('" + name + "', '" + surname + "', '" + phone + "', '" + email + "')";
    connection.query(qr, function(err, rows) {
        if (err) {
            console.error('error connecting: '+ err.stack);
            return;
        }
    });
    res.redirect('/confirm.html');
});


