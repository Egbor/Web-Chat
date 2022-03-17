const { response } = require('express');
const token = require('../models/Token');

exports.getToken = function(request, response) {
    token.get(request.body.token, 
        function(err, result) {
            response.send(JSON.stringify({ token: result[0].t_token, date: result[0].t_create_at}));
        }    
    );
}