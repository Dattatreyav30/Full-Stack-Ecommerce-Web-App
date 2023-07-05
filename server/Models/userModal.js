const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: { 
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  mobile : {
    type : Sequelize.BIGINT,  
    allowNull : false
  }, 
  passWord : {
    type : Sequelize.STRING,
    allowNull : false,
  }
});

module.exports = User