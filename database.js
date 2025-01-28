const { Sequelize } = require('sequelize');

const bleachDb = new Sequelize('bleach_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = { bleachDb };
