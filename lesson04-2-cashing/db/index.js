'use strict'

var db;

exports.connect = function(){
    db = require('./db.json.js.js');
};

exports.getUsers = function(){
    if(!db.users){
        throw new Error('No users into database!')
    }
    return db.users;
};

