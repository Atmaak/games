module.exports = (sequelize, DataTypes) => {
    return sequelize.define('rooms', {
        id_room: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
        room_uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        }
    })
}