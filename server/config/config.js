module.exports = {
	PORT: process.env.PORT || 3000,
	db: {
		database: 'nyakach.sqlite',
		user: process.env.DB_USER || 'nyakach',
		password: process.env.DB_PASS || 'kicc@2019!!',
		storage: 'db.sqlite',
		options: {
			dialect: process.env.DIALECT || 'sqlite',
			host: process.env.HOST || 'localhost',
			storage: 'db.sqlite',
		}
	}
	// authentication: {
	// 	jwtSecret: process.env.JWT_SECRET || 'kicc@2019!!'
	// }
}