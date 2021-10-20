
//set up the database and check the connection using Sequelize 

module.exports = {
    PORT: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'nodevuejsdb',
        user: process.env.DB_USER || 'nodevuejsdb',
        password: process.env.DB_PASS || 'nodevuejsdb',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            // storage: path.resolve(__dirname, '../../tabtracker.sqlite')
            storage: './nodevuejsdb.sqlite'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
      }
}