//Обработка ошибок
doAsyncWithReject = () => {
    return Promise.reject('It was error!!!');
}

doAsyncWithReject()
.then(
    null,
    (reason) => {
        console.log(`Rejected! ${reason}`);
    }
);

//Но невозможно отловить ошибку в колбэке:
doAsync = () => {
    console.log(`doAsync resolved!`);
    return Promise.resolve(`OK. `);
}

doAsync().then(
    (value)=> {
        console.log(`${value} But after that error was generated!!!`)
        throw new Error(`Error`);},
    (reason) => {
        console.log(`Rejected! ${reason}`);
    }
)
