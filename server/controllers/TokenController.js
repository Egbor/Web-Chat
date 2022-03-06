const { response } = require('express');
const token = require('../models/Token');

exports.getToken = function(request, response) {
    //response.set({ "Access-Control-Allow-Origin": request.get("Host") });
    response.send({ aaa: request.body });

    // token.get(request.body.token, 
    //     function(err, result) {
    //         response.send(result);
    //     }    
    // );
}