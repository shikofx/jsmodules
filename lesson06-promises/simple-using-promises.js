//Promise - это объект, который хранит свое состояние (ожидание, resolve, reject)
//и может передавть причины и значения в эти состояния
//Промисы используются в тех случаях, когда нужно нужно синхронизировать
//асинхронные операции. Т.е. сделать так, чтобы операции выполнялись друг за дружкой
//Это способ избавиться от callback hell, когда для подобных операций нужно
//вкладывать колбэки друг в дружку

function doAsyncWithResolve(){
    let promise = new Promise((resolve, reject) => {
        console.log("In promise");
        setTimeout(() => {
            console.log("resolving...");
            resolve('OK');
        }, 4000);
    });
    return promise;
}

let promise = doAsyncWithResolve()
.then(
    function(value){console.log(`resolved ${value}`);},
    function(reason){console.log(`rejected ${reason}`);}
);