const mysql = require("mysql2");
const mysqlConfig = require("./db_config.json");

exports.add = function(id, token, datetime, callback) {
    const connection = mysql.createConnection(mysqlConfig.db.webchat);
    connection.query("INSERT INTO tokens(t_user_id, t_token, t_create_at) VALUES(?, ?, ?)", [id, token, datetime],
        function(err, result, fields) {
            callback(err, result);
        }
    );
    connection.end();
}

exports.get = function(token, callback) {
    const connection = mysql.createConnection(mysqlConfig.db.webchat);
    connection.query("SELECT * FROM tokens WHERE t_token=?", [token], 
        function(err, result, fields) {
            callback(err, result);
        }
    );
    connection.end();
}