'use strict'

const db = require('../db/index');
const phrases = require('../db/phrases');

class User{
    constructor(name){
        this.name = name;
    }

    helloEn() {
        console.log(phrases.Hello.En, this.name);
    }
    introEn(){
        console.log(phrases.Intro.En, this.name);
    }

    helloRu() {
        console.log(phrases.Hello.Ru, this.name);
    }
    introRu(){
        console.log(phrases.Intro.Ru, this.name);
    }

    helloAll() {
        console.log(phrases.Hello.En + ' ', 
        db.getUsers()
        .filter(name => name !==this.name)
        .join(', '));
    }
}

exports.User = User;
