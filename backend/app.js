const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnection = require('./database/dbConnection');
const handleError  = require('./error/err');
const reservationRoute = require('./routes/reservationRoute');


const app = express();
dotenv.config({ path: './config/config.env' });

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true

}));


dbConnection();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/reservation', reservationRoute);
app.use(handleError);

module.exports = app;