const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        require : true
    },
    surname  : {
        type : String,
        require : true
    },
    age : {
        type : Number,
        require : true
    },
    email : { 
        type : String,
        require : true,
        unique : true,
    },
    phone : {
        type : String,
    }
})
 module.exports = User = mongoose.model('user', UserSchema);