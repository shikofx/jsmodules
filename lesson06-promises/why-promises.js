console.log('Request data...');

setTimeout(() => {
    console.log('Preparing data...');

    const backendData = {
        server: 'testServer',
        port: '8080',
        status: 'working'
    };

    //Для организации асинхронных процедур необходимо вкладывать один отложенный вызов в другой
    //Это ухудшает читаемость и поддерживаемость кода
    setTimeout(() => {
        backendData.modified = true;
        console.log('Data recieved: ' 
        + '\n   server: ' + backendData.server
        + '\n   port: ' + backendData.port 
        + '\n   status: ' + backendData.status 
        + '\n   modified: '+ backendData.modified);
    }, 2000);
}, 2000);