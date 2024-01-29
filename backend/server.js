const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const { initSocket } = require('./socket');

require('dotenv').config();

const server = require('http').createServer(app);
initSocket(server);

app.use(express.json());
app.use(cors());

app.disable('x-powered-by');

server.listen(process.env.port, () => {
    console.log('server running on port: ' + process.env.port);
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const { sequelize } = require('./models/_index');

sequelize.sync({ alter: true }).then(() => {
    console.log('Drop and Resync Db');
    // initialize()
});

const { rps_game } = require('./services/_index');