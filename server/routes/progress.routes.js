const express = require('express');
const { getUserProgress, updateUserProgress } = require('../controllers/progressController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:userId/progress', authMiddleware, getUserProgress);
router.put('/:userId/progress/:levelId/:challengeId', authMiddleware, updateUserProgress);

module.exports = router;
