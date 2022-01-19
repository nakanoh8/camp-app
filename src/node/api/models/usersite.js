'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsToMany(models.Site, {
        through: UserSite,
        foreignKey: "user_id"
      })
      models.Site.belongsToMany(models.User, {
        through: UserSite,
        foreignKey: "site_id"
      })
    }
  }
  UserSite.init({
    user_id: DataTypes.INTEGER,
    site_id: DataTypes.INTEGER,
    visit_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserSite',
    underscored: true,
  });
  return UserSite;
};