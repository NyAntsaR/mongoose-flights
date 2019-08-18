var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/new', ticketsCtrl.new);
router.post('/tickets', ticketsCtrl.create);
router.post('/flights/:id/tickets', ticketsCtrl.addToFlight);

module.exports = router;