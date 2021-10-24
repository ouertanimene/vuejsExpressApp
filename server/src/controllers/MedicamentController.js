
const { Medicament } = require('../models')

const getAll = async (req, res) => {

    try {       
        const medicaments = await Medicament.findAll({
            limit: 10
        })
        console.log('test ',medicaments)
        res.send(medicaments)
    }
    catch (err) {
        res.status(500).send({
            error: 'an error occured'
        })
    }
}

const createMed = async (req, res) => {
    //async post (req, res) {
    try {
        const medicament = await Medicament.create(req.body)
        res.send(medicament)
    } catch (err) {
        res.status(500).send({
            error: 'an error has occured trying to create the med'
        })
    }
}
const showMed = async (req, res) => {

    try {
        const song = await Song.findById(req.params.songId)
        res.send(song)
    } catch (err) {
        res.status(500).send({
            error: 'an error has occured trying to show the songs'
        })
    }
}
module.exports = {
    getAll,
    createMed,
    showMed
}


