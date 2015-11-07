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

/* I 'Servizi' sono dei componenti AngularJS che offrono funzionalità
 * indipendenti dall'interfaccia utente. Essi, in genere, consentono di
 * implementare la logica dell'applicazione, cioè le funzionalità che si
 * occupano di elaborare o recuperare i dati da visualizzare sulle 'View'
 * tramite i 'Controller'. Un altro ruolo che possiamo attribuire ai servizi è
 * quello della condivisione di funzionalità accessibili dagli altri componenti
 * dell’applicazione.
 * L'implementazione di un servizio la si può vedere di sotto dove abbiamo
 * inserito in una struttura di dati alcuni utenti che potranno essere
 * elaborati da più 'Controller'. Inoltre abbiamo fornito un metodo 'aggiungi()'
 * anch'esso disponibile a più 'Controller' che ne potranno fare uso.
 */
app.service("listUser", function() {
    this.list = [
        {Nome: "Antonio", Cognome: "Conte", Telefono: "3334455666", Email: "a.conte@calcio.it"},
        {Nome: "Max", Cognome: "Allegri", Telefono: "3335566777", Email: "m.allegri@calcio.it"},
        {Nome: "Roberto", Cognome: "Mancini", Telefono: "3336677888", Email: "r.mancini@calcio.it"},
        {Nome: "Maurizio", Cognome: "Sarri", Telefono: "3337788999", Email: "m.sarri@calcio.it"},
        {Nome: "Giampiero", Cognome: "Ventura", Telefono: "3338899000", Email: "g.ventura@calcio.it"}
    ];
    
    this.add = function(user) {
        this.list.push(user);
    };
});


