'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Car.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId'
      })
    }
  };
  Car.init({
    nombre: DataTypes.STRING,
    modelo: DataTypes.STRING,
    anio: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};