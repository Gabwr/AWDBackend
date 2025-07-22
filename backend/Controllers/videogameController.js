const activity = require("../Models/videogames");
const { Op } = require('sequelize');


exports.getAllVideogames = async (req, res) => {
    try {
        const videogames = await activity.findAll({ });
        res.status(200).json(videogames);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
