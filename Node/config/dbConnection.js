var mysql = require('mysql');

var connMySQL = function(){
    console.log("Consultou banco");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function(){
    console.log("CHAMOU O BD");
    return connMySQL;
};

        