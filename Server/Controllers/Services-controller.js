const Services = require("../models/Services-models");

const servicesForm = async (req, res) => {
    try {
        const response = await Services.find();
        if (!response) {
            res.status(404).json({ msg: "fuck hogya bhai- SERVICE not found" });
            return;
        }
        res.status(200).json({ msg: response });
    } catch (e) {
        console.log(`services : {e}`);

    }
}

module.exports = servicesForm;