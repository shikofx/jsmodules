'use strict';

const db = require('./db/index');
db.connect();

const User = require('./user/users');

var firstUser = new User.User(db.getUsers()[1]);

firstUser.helloAll();
firstUser.introEn();