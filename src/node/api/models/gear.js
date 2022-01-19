'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gear extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gear.init({
    name: DataTypes.STRING,
    gear_brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Gear',
    underscored: true,
  });
  return Gear;
};