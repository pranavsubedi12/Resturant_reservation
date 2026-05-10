const mongoose = require('mongoose');
const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
      dbName:'Resturant'
    })
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
};

module.exports = dbConnection;