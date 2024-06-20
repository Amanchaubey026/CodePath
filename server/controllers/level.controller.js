const { Level, Challenge } = require('../models');

exports.getAllLevels = async (req, res) => {
  try {
    const levels = await Level.findAll();
    res.json(levels);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getLevelById = async (req, res) => {
  try {
    const level = await Level.findByPk(req.params.id);
    res.json(level);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getChallengesByLevelId = async (req, res) => {
  try {
    const challenges = await Challenge.findAll({ where: { level_id: req.params.id } });
    res.json(challenges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
