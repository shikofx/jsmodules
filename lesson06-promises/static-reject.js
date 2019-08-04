
doAsyncWithReject = () => {
    return Promise.reject('It was error!!!');
}

doAsyncWithReject()
.then(
    null,
    (reason) => {
        console.log(`Error ${reason}`);
    }
);
