const { Challenge, UserProgress } = require('../models');

exports.getChallengeById = async (req, res) => {
  try {
    const challenge = await Challenge.findByPk(req.params.id);
    res.json(challenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.submitChallenge = async (req, res) => {
  try {
    const { userId } = req.user;
    const { id: challengeId } = req.params;
    const { solution } = req.body;

    const challenge = await Challenge.findByPk(challengeId);
    if (challenge.solution === solution) {
      await UserProgress.create({
        user_id: userId,
        level_id: challenge.level_id,
        challenge_id: challengeId,
        completed: true,
      });
      res.json({ message: 'Challenge completed successfully' });
    } else {
      res.status(400).json({ error: 'Incorrect solution' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
