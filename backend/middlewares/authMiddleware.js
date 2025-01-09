const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListTokenModel');
const captainModel = require('../models/captainModel');

module.exports.authUser = async (req, res, next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
    if(!token){
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }

    const isBlackListed = await blackListTokenModel.findOne({ token})
    if(isBlackListed){
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }

    try{
const decoded = jwt.verify(token, process.env.JWT_SECRET);
const user = await userModel.findById(decoded._id);
req.user = user;

return next();
    }
    catch(error){
        return res.status(401).json({ message: 'Not authorized to access this route' });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    // Use req.cookies instead of res.cookies
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  
    console.log(token);
  
    if (!token) {
      return res.status(401).json({ message: 'Not authorized to access this route' });
    }
  
    // Check if the token is blacklisted
    const isBlackListed = await blackListTokenModel.findOne({ token });
    if (isBlackListed) {
      return res.status(401).json({ message: 'Not authorized to access this route' });
    }
  
    try {
      // Decode the token
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded Token:", decode);
      console.log("Decoded ID:", decode.id); // Log the decoded ID
      // Find the captain using the decoded ID
      const captain = await captainModel.findById(decode.id);
      if (!captain) {
        return res.status(404).json({ message: 'Captain not found' });
      }
  
      // Attach the captain to the request
      req.captain = captain;
      return next(); // Continue to the next middleware or route handler
    } catch (error) {
      console.error('Authentication error:', error.message);
      return res.status(401).json({ message: 'Not authorized to access this route' });
    }
  };
  