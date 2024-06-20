const { User } = require('../models');

exports.getMe = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.userId);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMe = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findByPk(req.user.userId);
    user.username = username || user.username;
    user.email = email || user.email;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
