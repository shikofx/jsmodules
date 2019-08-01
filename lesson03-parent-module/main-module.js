'use strict';

function run(){
    console.log('Main module is running!!!')
}

if(module.parent){
    exports.run = run;
} else {
    run();
}