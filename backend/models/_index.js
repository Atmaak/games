const { Sequelize, DataTypes } = require('sequelize');

const { db } = require('../configs/_index')

const sequelize = new Sequelize(db.db_name, db.user, db.password, {
    host: db.host,
    dialect: db.dialect,
    define: {
        timestamps: false
    },
    logging: false
})

const Rooms = require('./room.model')(sequelize, DataTypes)

module.exports = {
    sequelize,
    Rooms
}