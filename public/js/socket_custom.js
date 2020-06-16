var socket = io();
// los on = escuchar desde el server
socket.on('connect', function() {
    console.log('conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdida de conexión al servidor');
});

// escuchar mensajes del servidor
socket.on('enviaMensaje', function(message) {
    console.log('Mensaje Servidor: ', message);
});

// emit= envia  o emite informacion al servicdor

socket.emit('enviaMensaje', {
    usuario: 'test2',
    message: 'Este Mensaje es enviado desde el cliente'
}, function(resp) {
    console.log('Respuesta del Servidor: ', resp)
});