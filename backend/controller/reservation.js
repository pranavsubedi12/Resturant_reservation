const ErrorHandler = require('../error/err').ErrorHandler;
const Reservation = require('../models/reservationSchema');

const createReservation = async (req, res, next) => {
    try {
        const body = req.body || {};
        const { FirstName, LastName, Email, PhoneNumber, Date, Time, TableNumber, Guests, Status } = body;
        if (!FirstName || !LastName || !Email || !PhoneNumber || !Date || !Time) {
            throw new ErrorHandler('All fields are required', 400);
        }
        const reservation = new Reservation({
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            Date,
            Time,
            TableNumber,
            Guests,
            Status
        });
        await reservation.save();
        res.status(201).json({
            success: true,
            message: 'Reservation created successfully',
            reservation
        
        });
    } catch (error) {
        next(error);
    }
};

const getAllReservations = async (req, res, next) => {
    try {
        const reservations = await Reservation.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: reservations.length,
            reservations
        });
    } catch (error) {
        next(error);
    }
};

const updateReservation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updates = req.body || {};

        if (Object.keys(updates).length === 0) {
            throw new ErrorHandler('No update fields provided', 400);
        }

        const reservation = await Reservation.findByIdAndUpdate(id, updates, {
            new: true,
            runValidators: true
        });

        if (!reservation) {
            throw new ErrorHandler('Reservation not found', 404);
        }

        res.status(200).json({
            success: true,
            message: 'Reservation updated successfully',
            reservation
        });
    } catch (error) {
        next(error);
    }
};

const deleteReservation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const reservation = await Reservation.findByIdAndDelete(id);

        if (!reservation) {
            throw new ErrorHandler('Reservation not found', 404);
        }

        res.status(200).json({
            success: true,
            message: 'Reservation deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createReservation,
    getAllReservations,
    updateReservation,
    deleteReservation
};

