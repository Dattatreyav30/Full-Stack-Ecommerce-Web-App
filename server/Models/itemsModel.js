const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Items = sequelize.define('products',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title : {
    type : Sequelize.STRING,
    allowNull : false
  },
  price: {
    type : Sequelize.INTEGER,
    allowNull : false
  },
  imageUrl : {
    type : Sequelize.STRING,
    allowNull:false
  },
  quantity : {
    type :Sequelize.INTEGER,
    allowNull : false
  },

});


module.exports = Items