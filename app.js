const Sequelize = require('sequelize');

const database = 'classical_mechanics';
const username = 'root';
const password = '123456';

const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
  logging: console.log
});

(async function() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;