import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    }
});
const port = 8080;

// app.use(cors({
//     origin: 'http://localhost:5173'
// }));

io.on('connection', async (socket) => {

    console.log(`Connected with id: ${socket.id}`);

    socket.on('send-msg', (msg, data) => {
        socket.to(data).emit('reply', msg);
        console.log(msg);
    })

    socket.on('join-room', data => socket.join(data));




    socket.on('disconnect', () => {
        console.log(`Disconnected user with id: ${socket.id}`);
    });
})

server.listen(port, () => {
    console.log(`Server Running on: http://localhost:${port}`);
})