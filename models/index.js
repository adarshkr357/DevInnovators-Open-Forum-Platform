// models/index.js
const { Sequelize } = require('sequelize');
const config = require('../config/database');

// For PostgreSQL
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'postgres'
});

// Import models
const User = require('./User')(sequelize);

// Sync models (only in development)
sequelize.sync({ alter: true });

module.exports = { User };