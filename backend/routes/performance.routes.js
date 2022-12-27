const Router = require('express');
const router = new Router();

const PerformanceController = require('../controller/performance.controller');

router.get('/performance', PerformanceController.getPerformance);
router.post('/performance', PerformanceController.createPerformance);
router.put('/performance', PerformanceController.updatePerformance);
router.delete('/performance', PerformanceController.deletePerformance);

module.exports =router;