function getLazySumm(a, b, callback){
    let timeout = Math.random() * 10000;
    console.log('timeout = ' + timeout);
    setTimeout(() => {
        callback(a + b);
    }, timeout);
}

function logMessage(message){
    console.log(message);
}

getLazySumm(1, 2, logMessage);