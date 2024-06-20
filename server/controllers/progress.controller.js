const { UserProgress } = require('../models');

exports.getUserProgress = async (req, res) => {
  try {
    const userProgress = await UserProgress.findAll({ where: { user_id: req.params.userId } });
    res.json(userProgress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUserProgress = async (req, res) => {
  try {
    const { userId, levelId, challengeId } = req.params;
    const { completed, stars_earned } = req.body;

    const userProgress = await UserProgress.findOne({
      where: { user_id: userId, level_id: levelId, challenge_id: challengeId }
    });

    if (userProgress) {
      userProgress.completed = completed !== undefined ? completed : userProgress.completed;
      userProgress.stars_earned = stars_earned !== undefined ? stars_earned : userProgress.stars_earned;
      await userProgress.save();
    } else {
      await UserProgress.create({
        user_id: userId,
        level_id: levelId,
        challenge_id: challengeId,
        completed,
        stars_earned,
      });
    }

    res.json(userProgress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
