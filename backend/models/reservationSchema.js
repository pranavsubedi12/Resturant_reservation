const mongoose = require('mongoose');
const validator = require('validator');
const reservationSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },
    LastName: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },
    Email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    PhoneNumber: {
      type: String,
      required: true,
      minlength: [10, 'Phone number must be of 10 digits'],
      maxlength: [10, 'Phone number must be of 10 digits']
    },
    Time:{
        type: String,
        required: true
    },

    Date: {
        type: String,
        required: true
    },
    TableNumber: {
        type: Number,
        min: [1, 'Table number must be at least 1']
    },
    Guests: {
        type: Number,
        min: [1, 'Guests must be at least 1'],
        default: 1
    },
    Status: {
        type: String,
        enum: ['pending', 'confirmed', 'completed', 'cancelled'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);