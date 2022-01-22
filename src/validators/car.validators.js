import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-я]{1,20}$')).required(),
    price: Joi.number().min(0).max(1000000),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required()
})