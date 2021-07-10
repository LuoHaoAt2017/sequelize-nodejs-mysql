const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const models = {};

const database = 'h3yun_table';
const username = 'root';

// win
const password = '123456';

// mac
// const password = 'LuoHao-123';

const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    // 禁止表名推断，强制表名称等于模型名称。
    freezeTableName: true,
  }
});

fs.readdirSync(__dirname).filter((file) => {
  return file.slice(-3) === '.js' && file !== basename;
}).forEach(file => {
  // require 阻塞式地加载文件
  const model = require(path.join(__dirname, file))(sequelize, Sequelize);
  models[model.name] = model;
});

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

(async function() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize.sync({ force: true }); // 模型同步
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;