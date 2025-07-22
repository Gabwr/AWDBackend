const { DataTypes } = require("sequelize");
const sequelize = require('./databaseSequelize');

const videogames = sequelize.define('videogames', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_year: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    
}, {
  tableName: 'videogames',
  timestamps: false,  
});

module.exports = videogames;
