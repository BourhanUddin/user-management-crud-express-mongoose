import Joi from 'joi';
//a schema validation using joi  is  here
const addressValidationSchema = Joi.object({
  street: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required(),
});

const userValidationSchema = Joi.object({
  userId: Joi.number().integer().positive(),
  username: Joi.string().required(),
  password: Joi.string().required(),
  fullName: Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  }),
  age: Joi.number().integer().positive().required(),
  email: Joi.string().email().required(),
  isActive: Joi.boolean().default(true),
  hobbies: Joi.array().items(Joi.string()),
  address: addressValidationSchema,
});

export default userValidationSchema;
