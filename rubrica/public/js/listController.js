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

/* Il metodo controller() consente di associare ad una stringa una
 * funzione che avrà il compito di rappresentare il nostro
 * 'Controller'. Nel caso specifico abbiamo associato al nome
 * 'listController' una funzione che aggancierà alla variabile '$scope'
 * la lista degli utenti.
 * 
 * Si nota che la funzione che definisce il 'Controller' ha come
 * parametro '$scope'. Questo parametro, il cui nome inizia con il
 * simbolo del dollaro per una convenzione comune a tutti gli
 * oggetti di sistema, viene passato dal framework al 'Controller'
 * ed è un oggetto condiviso con la 'View'. Il compito di '$scope' è
 * di consentire la definizione del modello dei dati e la sua
 * esposizione alla 'View'. Tutte le proprietà di questo oggetto
 * saranno direttamente accessibili dalla 'View' purché legati dalla
 * direttiva 'ng-model'.
 */

app.controller("listController", function($scope, listUser) {
    $scope.listU = listUser.list;
});


