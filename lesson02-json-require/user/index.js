'use strict';

const helloConfig = require("./phrases");

class User{
    constructor(name){
        this.name = name;
    }

    helloEn() {
        console.log(helloConfig.Hello.En, this.name);
    }
    introEn(){
        console.log(helloConfig.Intro.En, this.name);
    }

    helloRu() {
        console.log(helloConfig.Hello.Ru, this.name);
    }
    introRu(){
        console.log(helloConfig.Intro.Ru, this.name);
    }
}

exports.User = User;