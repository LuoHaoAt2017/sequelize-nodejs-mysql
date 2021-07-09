const { Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {

  class Record extends Model {}

  Record.init({
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    sequelize: sequelize,
    modelName: 'Record',
    freezeTableName: true,
  });

  return Record;
}
