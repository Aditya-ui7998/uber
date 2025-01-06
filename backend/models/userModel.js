const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters or more']
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters or more']
        }
    },

    email: {
        type: String,
        required: true,
        minlength: [5, 'Email must be entered'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    
    socketId: {
        type: String
    }
});

// Generate JWT for user authentication
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
     
    return token;
};

// Compare password during login
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

// Hash password before saving it to the database
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;
