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

/* Il metodo controller() consente di associare ad una stringa una
 * funzione che avrà il compito di rappresentare il nostro
 * 'Controller'. Nel caso specifico abbiamo associato al nome
 * 'loadCtrl' una funzione che aggancierà alla variabile '$scope'
 * la lista degli utenti.
 * 
 * Il metodo farà richiesta di GET all'indirizzo specificato e, in caso di
 * successo, caricherà i dati nell'oggetto 'data' della funzione di callback
 * passata al 'Controller'. Tali dati verranno aggiunti all'oggetto 'listUser'
 * che a sua volta sarà riassegnato all'oggetto $scope.listU che è l'oggetto
 * condiviso con la 'View'.
 */

app.controller("loadCtrl", function($scope, $http) {
    $http.get("http://localhost:3000/load").success(function(data) {
        this.list = [];
        for(var i = 0; i < data.length; i++) {
            this.list.push({
                title: data[i].title,
                year: data[i].year
            });
        }
        $scope.filmData = this.list;
    });
});


