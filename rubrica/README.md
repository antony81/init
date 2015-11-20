# rubrica
#### Una piccola applicazione dimostrativa per testare le funzionalità di AngularJS e NodeJS.


# Prerequisiti
Installare [git](http://git-scm.com/) e un web browser.

Installare [NodeJS](https://nodejs.org/).

Installare inoltre i pacchetti express, body-parser e mysql.

```shell
npm install -g express
```

```shell
npm install body-parser
```

```shell
npm install mysql
```


## Come scaricare l'applicazione
Eseguire il seguente comando per ottenere sul proprio PC una copia del codice.

```shell
git clone https://github.com/antony81/init
```

Importare in un DataBase mysql il file rubricaDB.sql che si trova nella sottocartella init/rubrica.

```shell
mysql -u user -p < rubricaDB.sql
```

Al posto di user inserire l'username del proprio mysql. Inserire la password quando richiesta.


## Avviare l'applicazione
Posizionarsi nella sottocartella init/rubrica.

Aprire con un editor il file server.js e mettere user e password del proprio DataBase dove richiesto.

Avviare con NodeJS il file server.js (che funge da server per l'applicazione).

```shell
nodejs server.js
```

Aprire un web browser e digitare sulla barra degli indirizzi la seguente stringa:

[http://localhost:3000/](http://localhost:3000/)

