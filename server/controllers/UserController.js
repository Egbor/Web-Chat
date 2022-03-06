const crypto = require('crypto');

const user = require('../models/User');
const token = require('../models/Token');

exports.authorizeUser = function(request, response) {
    const hashedPassword = crypto.createHash("md5").update(request.body.user.password).digest("hex");
    user.find(request.body.user.login, 
        function(err, result) {
            if (err) response.send(err);
            if (result.length === 0 || result[0].u_password !== hashedPassword) {
                response.redirect("http://localhost/login?error=" + btoa("Wrong login or password"));
            } else {
                const id = result[0].u_id;
                const date = new Date();
                const hash = crypto.createHash("md5").update(result[0].u_login + result[0].u_password + date).digest("hex");

                token.add(id, hash, date,
                    function (err, result) {
                        response.redirect("http://localhost/account/session?token=" + btoa(hash));
                    }    
                );
            }
        }
    );
}

exports.registerUser = function(request, response) {
    const hashedPassword = crypto.createHash("md5").update(request.body.user.password).digest("hex");
    user.exist(request.body.user.login, 
        function(err, result) {
            if (err) response.send(err);
            if (result[0].usersCount > 0) {
                response.redirect("http://localhost/account/create?error=" + btoa("This user already exists"));
            } else {
                user.add(request.body.user.login, hashedPassword,
                    function(err, result) {
                        exports.authorizeUser(request, response);
                    }    
                );
            }
        }    
    );
}