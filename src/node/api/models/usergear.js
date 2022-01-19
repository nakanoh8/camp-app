'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserGear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsToMany(models.Gear, {
        through: UserGear,
        foreignKey: "user_id"
      })
      models.Gear.belongsToMany(models.User, {
        through: UserGear,
        foreignKey: "gear_id"
      })
    }
  }
  UserGear.init({
    user_id: DataTypes.INTEGER,
    gear_id: DataTypes.INTEGER,
    purchase_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserGear',
    underscored: true,
  });
  return UserGear;
};