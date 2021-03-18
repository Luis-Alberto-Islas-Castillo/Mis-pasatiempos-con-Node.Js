const path = require('path');
const express = require('express');
const app = express();

//Setings
app.set('port', process.env.PORT || 3000);

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//llamando al servisr
const server= app.listen(app.get('port'), () => {
    console.log('Servidor en Linea', app.get('port'));
});

//websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('Nueva Conexion', socket.id);

    socket.on('chat:message', (data) => {
        io.sockets.emit('chat:message', data)
    });
    socket.on('chat:typing', (data) => {
        socket.broadcast.emit('chat:typing', data);
    })
});
