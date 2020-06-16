const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario Conectado');
    // escucha desde el cliente
    client.on('disconnect', () => {
        console.log("Usuario Desconectado");
    });

    // emitir un evento a todos los conectados
    client.emit('enviaMensaje', { usuario: 'Administrador', message: 'Bienvenidos al servicio' });

    client.on('enviaMensaje', (data, callback) => {

        console.log('Mensaje desde front: ', data);
        //envia mensajes a todos los conectados paar ejemplo abrir distintos browser y ejecutar con Node server/server
        client.broadcast.emit('enviaMensaje', data);
    });
});