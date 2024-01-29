const { Server } = require('socket.io');
const { instrument } = require("@socket.io/admin-ui");
let io;

const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: ["https://admin.socket.io"],
            credentials: true
        }
    })   

    // io.of('/socket').on('connection', (socket) => {
    //     console.log(socket.id)
    //     socket.on("disconnect", () => {
    //         console.log(socket.id) 
    //     });
    // })

    io.of('/rps').on('connection', (socket) => {
        console.log(socket.id)
        socket.on('join_room', (uuid) => {
            socket.join(uuid)
            console.log(`User joined room ${uuid}`)
        });
    })

    

    instrument(io, {
        auth: {
            type: "basic",
            username: "admin",
            password: "$2a$12$7AEvs4OZkSji7TVyxcI1OOqPeoKbBeD5wdfhffquzhEPCznHGR2AS"
        }
    })
}

const getIo = () => {
    return io
}

module.exports = {
    initSocket,
    getIo
}