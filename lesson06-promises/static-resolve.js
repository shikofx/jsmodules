//Используется тогда, когда есть функция, на вход которой подается promise, а мы хотим передать значение
//В таком случае значение заворачивается в промис с определением его состояния при
doAsyncWithResolve = () => {
    return Promise.resolve('Hurra!!!');
}

doAsyncWithResolve().then(
    (value) => {
        console.log(`Success ${value}`);
    },
    (reason) => {
        console.log(`Error ${reason}`);
    }
);

doAsync = () => {
    return Promise.resolve('OK from doAsync');
}

//Вариант 1
doAsync()
.then((value) => {
    console.log(`Resolved ${value}`);
    return 'Nice hell';
})
.then((value) => {
    console.log(value);
})

//Вариант 2. Когда then возвращает Promise, то на вход следующего поступает его значение
doAsync1 = () => {
    return Promise.resolve('OK from doAsync1.');
}
doAsync1()
.then((value) => {
    console.log(`Resolved 1 ${value}`);
    return doAsync1();
})
.then((value) => {
    console.log(value);
});
