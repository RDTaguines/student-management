//validation
const Joi = require('joi');
const loginValidation = (data) => {
    const schema = Joi.object({
        Email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        Password: Joi.string().min(6).required()
    });

    return schema.validate(data);
}

module.exports = {
    loginValidation
}