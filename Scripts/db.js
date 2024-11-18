const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('todo_db', 'Max', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const Task = sequelize.define('Task', {
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

sequelize.sync();

module.exports = Task;