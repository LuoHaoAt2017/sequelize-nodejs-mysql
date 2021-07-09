const { Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {

  class Application extends Model {
    static associate(models) {
      Application.hasMany(models.Schema, {
        foreignKey: 'appCode',
        as: 'schemas'
      });
      // Application.hasMany(models.Schema);
    }
  }

  Application.init({
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    appCode: {
      type: Sequelize.DataTypes.UUID,
      allowNull: true,
      get() {
        return this.id;
      },
      set() {
        throw new Error('不能够设置 appCode 虚拟字段');
      }
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    domain: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: true,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Application',
    freezeTableName: true,
  });

  return Application;
}
