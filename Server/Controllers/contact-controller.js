const Contact = require('../models/contact-model');

const contactForm = async (req, res) => {
    try {
        const resp = req.body;
        await Contact.create(resp);
        return res.status(200).json({ message: " Message successfully created." });
    } catch (error) {
        return res.status(500).json({ message: " Message failed to be created." });
    }
}

module.exports = contactForm;