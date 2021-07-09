const { Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {

  class Profile extends Model {}

  Profile.init({
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
  }, {
    sequelize: sequelize,
    modelName: 'Profile',
    freezeTableName: true,
  });

  return Profile;
}
