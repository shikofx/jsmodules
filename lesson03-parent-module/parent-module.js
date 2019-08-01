'use strict';
function run(){
    console.log('Parent module is running!!!')
}
run();
const mainModule = require('./main-module');
mainModule.run();