
const AuthentificationController = require('../controllers/AuthentificationController')
const AuthentificationControllerPolicy = require('../policies/AuthentificationControllerPolicy')


module.exports = (app) => {
    app.post('/eregister',
        // AuthentificationControllerPolicy.register,
        AuthentificationController.register)


    app.post('/login',
        // AuthentificationControllerPolicy.register,
        AuthentificationController.login)

    app.get('/', (req, res) => {
        res.send({
            message: 'hi '
        })
    })

}