const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3400 || process.env.PORT;

server.listen(3400, () => {
    console.log(`Server running on port ${PORT}`);
});

