//  for validating the schema be use SCHEMA.PARSEasync(req.body) user ka registration sahi hai ya nhai


const validate = (schema) => async (req, res, next) => {
    try {
        const validator = await schema.parseAsync(req.body);
        req.body = validator;
        next();
    } catch (err) {
        const status = 404;
        const message = "Fill the input properly";
        const extraDetails = err.message[0].message;
        const error = {
            status,
            message,
            extraDetails,
        };
        console.log(error);
        // res.status(404).json({msg: "Tatti ruk gyi "});
        next(error);
    }
}

module.exports = validate;