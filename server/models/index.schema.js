const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const User = require('./user')(sequelize, Sequelize.DataTypes);
const Level = require('./level')(sequelize, Sequelize.DataTypes);
const Challenge = require('./challenge')(sequelize, Sequelize.DataTypes);
const UserProgress = require('./userProgress')(sequelize, Sequelize.DataTypes);

User.hasMany(UserProgress, { foreignKey: 'user_id' });
Level.hasMany(Challenge, { foreignKey: 'level_id' });
UserProgress.belongsTo(User, { foreignKey: 'user_id' });
UserProgress.belongsTo(Level, { foreignKey: 'level_id' });
UserProgress.belongsTo(Challenge, { foreignKey: 'challenge_id' });

module.exports = { sequelize, User, Level, Challenge, UserProgress };
