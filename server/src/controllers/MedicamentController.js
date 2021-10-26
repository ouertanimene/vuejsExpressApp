
const { Medicament } = require('../models')

const getAll = async (req, res) => {
    console.log('test ')
    const medicaments = await Medicament.findAll({
        limit: 10
    })

    res.send(medicaments)
    console.log('here llist', medicaments)
}

const createMed = async (req, res) => {
    //async post (req, res) {  

    try {
        const medicament = await Medicament.create(req.body)
        res.send(medicament)
        // console.log('hi controller ',medicament.toJSON())

    } catch (err) {
        res.status(500).send({
            error: 'an error has occured trying to create the med'
        })
    }
}
const getMedicament = async (req, res) => {

    try {
        const medicament = await Medicament.findByPk(req.params.medicamentId)

        res.send(medicament)
    } catch (err) {
        res.status(500).send({
            error: 'an error has occured trying to create the med'
        })
    }

}

module.exports = {
    getAll,
    createMed,
    getMedicament
}


