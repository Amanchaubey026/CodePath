const express = require('express');
const { getAllLevels, getLevelById, getChallengesByLevelId } = require('../controllers/levelController');
const router = express.Router();

router.get('/', getAllLevels);
router.get('/:id', getLevelById);
router.get('/:id/challenges', getChallengesByLevelId);

module.exports = router;
