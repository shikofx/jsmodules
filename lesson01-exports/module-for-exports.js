let number = 10;
let stringHello = 'Hello, World!!! It is my first js program!!!';

const funTest = () => { 
    return 20;
}

//Вариант экспорта через объект module
module.exports = {
    number,
    stringHello,
    num: number + stringHello,
    funTest
}

//Вариант экспорта через exports. Работает, пока не объявишь module.exports
// exports.num = number;
// exports.funTest = funTest;
