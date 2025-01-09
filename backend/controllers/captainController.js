const captainModel = require('../models/captainModel');
const captainService = require('../services/captainService');
const { validationResult } = require('express-validator');
const BlackListTokenModel = require('../models/blackListTokenModel');


module.exports.registerCaptain = async (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    const {fullname,email,password,vehicle} = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({email});  //to check if captain already exists
    if(isCaptainAlreadyExist){
        res.status(400).json({message:'Captain already exists'});
    }

    const hashedPassword = await captainModel.hashPassword(password); //to hash the password

    const captain = await captainService.createCaptain({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password,
        color:vehicle.color,
        plate:vehicle.plate,
        capacity:vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();
    res.cookie('token',token);

    return res.status(201).json({token,captain});
}

module.exports.loginCaptain = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        const captain = await captainModel.findOne({ email }).select('+password');

        if (!captain) {
            return res.status(401).json({ message: 'Invalid email ' });
        }

        const isMatch = await captain.comparePassword(password);
        console.log(isMatch);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = captain.generateAuthToken();
        console.log('Generated Token:', token);  // Log token for debugging
        res.cookie('token', token);

        return res.status(200).json({ token, captain });
    } catch (error) {
        console.error('Error during login:', error.message);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
};


module.exports.getCaptainProfile = async (req,res,next) =>{
    return res.status(200).json(req.captain);
}

module.exports.logoutCaptain = async (req,res,next) =>{
const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

await BlackListTokenModel.create({token});

    res.clearCookie('token');
    return res.status(200).json({message:'Logged out successfully'});
}