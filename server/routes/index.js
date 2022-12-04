const express = require('express');
const { pingController, getFeeCalculationsController } = require('../controllers/index');

const router = express.Router();

router.get('/ping', pingController.getPing);
router.get('/feecalculations', getFeeCalculationsController.getFeeCalculations);

module.exports = router;