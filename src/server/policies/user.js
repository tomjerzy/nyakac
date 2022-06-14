const Joi = require('joi')

module.exports = {
	register (req, res, next) {
		const schema = {
			f_name: Joi.string(),
			l_name: Joi.string(),
			phone: Joi.number(),
			username: Joi.string(),
			avatar: Joi.string(),
			gender: Joi.string(),
			password: Joi.string().min(6).max(30),
			email: Joi.string()
		      .email()
		      .regex(/example\.com$/),
		}

		const {error} = schema.validate(req.body)
		if (error) {
			switch (error.details[0].context.key) {
				case 'username':
				res.status(400).send({
					error: 'Provide a valid username'
				})
				break
				case 'password':
				res.status(400).send({
					error: 'Invalid password type. Password should not be less than 6 characters'
				})
				break
				case 'f_name':
				res.status(400).send({
					error: 'First name is invalid'
				})
				break
				case 'l_name':
				res.status(400).send({
					error: 'Last name is invalid'
				})
				break
				case 'phone': 
				res.status(500).send({
					error: 'Provide a valid phone number'
				})
				default:
				res.status(500).send({
					error: 'Sorry! Registration could not be completed.'
				})
			}
		} else {
		next()	
		}
	}
}