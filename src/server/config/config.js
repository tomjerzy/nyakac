module.exports = {
	PORT: process.env.PORT || 3000,
	db: {
		database: process.env.DB_NAME || 'nyakachdb',
		user: process.env.DB_USER || 'nyakach',
		password: process.env.DB_PASS || 'kicc@2019!!',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
		}
	},
	authentication: {
		jwtSecret: process.env.JWT_SECRET || 'kicc@2019!!'
	}
}