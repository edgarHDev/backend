const mongoose = require('mongoose');
const { json } = require('body-parser');

const config = require('./default.json');
const db = config.mongoURI

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology : true,
            useCreateIndex : true,
            useFindAndModify : false
        });
        console.log('MongoDB connected...');        
    } catch (error) {
        console.error(error.message);
//        process.exit(1);
    }
};
 module.exports = connectDB