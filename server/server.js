const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');


const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// ioserver = conexión inputp/output del backend. lo exporto para que pueda usarse en socket.js con un require('server')
module.exports.io = socketIO(server);

require('./sockets/socket');



server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});