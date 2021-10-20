const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const config = require('./config/config')
const { sequelize } = require('./models')

app.use(bodyParser.json())


app.use(cors())

require('./routes/routes')(app)


//const port = process.env.PORT || 3000
//app.listen(port, () => console.log(`App listening on port ${port}`))

sequelize.sync().then(() => {
    app.listen(config.PORT)
})
