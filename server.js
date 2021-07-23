const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Run when client connects
io.on('connection', socket => {
    console.log('Web Server Connection');

    socket.emit('message', 'Welcome to Chat!');

//Broadcast when a user connects
socket.broadcast.emit('message', 'A user has joined the chat');
});

//Runs when client disconnects
socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
});

const PORT = 3400 || process.env.PORT;

server.listen(3400, () => {
    console.log(`Server running on port ${PORT}`);
});


