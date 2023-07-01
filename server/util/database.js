const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce-website','root',"Mykoshi@3",{
    dialect : 'mysql',
    host  : 'localhost'
})

module.exports = sequelize