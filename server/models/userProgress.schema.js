module.exports = (sequelize, DataTypes) => {
    const UserProgress = sequelize.define('UserProgress', {
      user_progress_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      level_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      challenge_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      stars_earned: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    });
  
    return UserProgress;
  };
  