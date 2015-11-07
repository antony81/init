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


/* La definizione del 'Modulo' viene effettuata utilizzando il
 * metodo module() dell’oggetto globale 'angular' e passando una
 * stringa che rappresenta il nome del 'Modulo' e un elenco di
 * eventuali dipendenze. Facendo corrispondere il nome del 'Modulo'
 * con il nome assegnato alla direttiva 'ng-app' stiamo informando
 * AngularJS che il codice che gestisce la nostra applicazione si
 * trova nel modulo omonimo.
 * In questo caso inoltre assegneremo il nostro 'Modulo' nella
 * variabile 'app' su cui verrà definito il 'Controller' di cui
 * abbiamo bisogno.
 */
var app = angular.module("myApp", []);


