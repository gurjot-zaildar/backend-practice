const { body , validationResult} = require("express-validator")

function validate(req, res, next){
const error = validationResult(req);
if(!error.isEmpty()){
    return res.status(400).json({
        error: error.array()
    })
}
    next();
}

const registerValidationRules=[
    body("username")
        .isString().withMessage("username must be a string")
        .notEmpty().withMessage("username is required")
        .isLength({ min: 3 }).withMessage("username must be at least 3 character long"),
    body("email")
        .isEmail().withMessage("invalid email formait")
        .notEmpty().withMessage("email is required"),
    body("password")
        .isLength({ min: 6 }).withMessage("password must be at least 6 character long"),
    validate 
]

module.exports = {registerValidationRules};