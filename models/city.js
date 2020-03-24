'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    prov_code: DataTypes.STRING,
    city_name: DataTypes.STRING
  }, {});
  City.associate = function(models) {
    City.hasMany(models.Province, {
      foreignKey: 'prov_code',
      target_key: 'prov_code'
    });
  };
  return City;
};
