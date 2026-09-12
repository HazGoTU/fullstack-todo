const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    const Schedule = sequelize.define('Schedule',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        list:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        date:{
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        tableName: 'schedule'
    })
    return Schedule;
}