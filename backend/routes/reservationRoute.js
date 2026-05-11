const express = require('express');
const router = express.Router();
const {
	createReservation,
	getAllReservations,
	updateReservation,
	deleteReservation
} = require('../controller/reservation');

router.post('/create', createReservation);
router.get('/all', getAllReservations);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

module.exports = router;