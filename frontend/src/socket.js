const { io } = require("socket.io-client")

let socket; 

const initializeSocket = (room_uuid, namespace = "") => {
    let x = process.env.REACT_APP_SOCKET_LINK + namespace
    // console.log(x)
    socket = io(x, {
        transports: ['websocket']
    })
    socket.connect()
    console.log('WS: connecting')
    socket.on('connect', () => {
        socket.emit('join_room', JSON.stringify({room_uuid}))
    })
    socket.on("connect_error", (err) => {
        console.log(err);
    })
}

const getSocket = () => {
    return socket;
}

module.exports = {
    initializeSocket,
    getSocket
}