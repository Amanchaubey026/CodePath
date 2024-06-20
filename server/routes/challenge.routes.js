const express = require('express');
const { getChallengeById, submitChallenge } = require('../controllers/challengeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:id', getChallengeById);
router.post('/:id/submit', authMiddleware, submitChallenge);

module.exports = router;
