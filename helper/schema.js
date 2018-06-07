// load Joi module
const Joi = require('joi');
// accepts name only as letters and converts to uppercase
const name = Joi.string().regex(/^[A-Z]+$/).uppercase();

const authSchema= Joi.object().keys({
    email: Joi.string().email().lowercase().required(),
})

// export the schemas
module.exports = {
    '/signin': authSchema,
    
};