const mapService = require('../services/mapService');
const { validationResult } = require('express-validator');


module.exports.mapController = async (req,res,next)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

const { address } = req.query;
try{
const coordinates = await mapService.getAddressCoordinate(address);
res.status(200).json(coordinates);
}
catch (error) {
res.status(500).json({message:"Internal server error"})
}
}