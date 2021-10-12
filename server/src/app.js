const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')

app.use(bodyParser.json())




app.use(cors())


app.get('/', (req, res) => {
    res.send({
        message: 'hi '
    })
})
app.post('/eregister', (req, res) => {
        res.send({
           message: `user  ${req.body.email} well registred `
       })
   /** let newUser = {
        id: Date.now(),
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
    };
    users.push(newUser);*/
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`))

//app.listen(process.env.PORT || 3000)