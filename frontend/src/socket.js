const { io } = require("socket.io-client")

let socket; 

const initializeSocket = () => {
    let x = process.env.REACT_APP_SOCKET_LINK + "/socket"
    // console.log(x)
    socket = io(x, {
        transports: ['websocket']
    })
    socket.connect()
    console.log('WS: connecting')
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