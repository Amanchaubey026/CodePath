module.exports = (sequelize, DataTypes) => {
    const Challenge = sequelize.define('Challenge', {
      challenge_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      level_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      question: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      code_snippets: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      solution: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      hints: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
  
    return Challenge;
  };
  