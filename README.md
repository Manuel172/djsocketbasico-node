# Notas:

Este es un pequeño Ejemplo de Socket Básico

Recuerden que deben de reconstruir los módulos de node con el comando

```
npm install
```

ejecutar con: node server/server
abrir diferentes browser y consola de desarrollador para enviar mensaje:
socket.emit('enviaMensaje', {
    usuario: 'test2',
    message: 'Este Mensaje es de usuario test2'
});