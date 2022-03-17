const mysql = require("mysql2");
const mysqlConfig = require("./db_config.json");

exports.add = function(login, password, callback) {
    const connection = mysql.createConnection(mysqlConfig.db.webchat);
    connection.query("INSERT INTO users(u_login, u_password) VALUES(?, ?)", [login, password], 
        function(err, result, fields) {
            callback(err, result);
        }
    );
    connection.end();
}

exports.find = function(login, callback) {
    const connection = mysql.createConnection(mysqlConfig.db.webchat);
    connection.query("SELECT * FROM users WHERE u_login=?", [login],
        function(err, result, fields) {
            callback(err, result);
        }
    );
    connection.end();
}

exports.exist = function(login, callback) {
    const connection = mysql.createConnection(mysqlConfig.db.webchat);
    connection.query("SELECT COUNT(*) AS usersCount FROM users WHERE u_login=?", [login], 
        function(err, result, fields) {
            callback(err, result);
        }
    );
    connection.end();
}