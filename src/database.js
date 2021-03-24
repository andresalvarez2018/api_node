const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'api_node'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }else{
        console.log('base de datos conectada ');
    }
});

module.exports = mysqlConnection;