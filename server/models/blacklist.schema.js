const {sequelize} = require('../config/db.config')
const {DataTypes} = require('sequelize');

const blackList = sequelize.define('blackListTable',{
    token:{type:DataTypes.STRING},

},{
    tableName:'blackListTable',
    timestamps:false
})


module.exports = {
    blackList
}