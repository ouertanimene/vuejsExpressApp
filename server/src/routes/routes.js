
const AuthentificationController = require('../controllers/AuthentificationController')
const MedicamentController = require('../controllers/MedicamentController')
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

    app.get('/medicaments',MedicamentController.getAll)

    app.post('/addMed',MedicamentController.createMed)

    app.get('/viewMed/:medicamentId',MedicamentController.getMedicament)
    
}