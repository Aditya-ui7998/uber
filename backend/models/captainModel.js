const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({

    fullname: {
        firstname:{
            type:String,
            required:true,
            min: [3,'Too short, min is 3 characters'],
        },
        lastname:{
            type:String,
            min: [3,'Too short, min is 3 characters'],
        }
    },


    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email']
    },


    password: {
        type: String,
        required: [true, 'Please provide a password'],
        select: false
    },


    socketId: {
        type: String
    },


    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },


    vehicle:{
      color:{
    type:String,
    required:true,
    min: [3,'Too short, min is 3 characters'],
       },
       plate:{
    type:String,
    required:true,
    min: [3,'Too short, min is 3 characters'],
       },
       capacity:{
        type:Number,
        required:true,
        min:[1,'Minimum capacity is 1']
       },
       vehicleType:{
        type:String,
        enum:['motorcycle','car','auto'],
        required:true
       }
    },

    location:{
        lat:{
            type:Number,
        },
        lag:{
            type:Number,
        }
    }

});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({id:this._id},process.env.JWT_SECRET,{ expiresIn: '24'});
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}


const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;