const { Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {

  class Schema extends Model {
    static associate(models) {
      Schema.belongsTo(models.Application, {
        foreignKey: 'appCode',
        as: 'application'
      });
    }
  }

  Schema.init({
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    schemaCode: {
      type: Sequelize.DataTypes.UUID,
      get: function() {
        return this.id;
      },
      set() {
        throw new Error('不能够设置 schemaCode 虚拟字段');
      }
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Schema',
  });

  return Schema;
}
