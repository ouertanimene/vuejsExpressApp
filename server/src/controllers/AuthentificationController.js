
const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60 * 60 * 24 * 7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

const register = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create(req.body);
        const userJson = user.toJSON()
        res.send({
            user: userJson,
            token: jwtSignUser(userJson)
        })
    }
    catch (err) {
        res.status(400).send({
            error: 'This email account is already in use.'
        })
    }
}
const login = async (req, res) => {
    console.log(req.body)
    try {
        const { email, password } = req.body
        const user = await User.findOne({
            where: {
                email: email
            }
        })
        console.log('user', user.toJSON())
        if (!user) {
            return res.status(403).send({
                error: 'The login information was incorrect'
            })
        }
        //  const isPasswordValid = await user.comparePassword(password)
        const isPasswordValid = password === user.password
        if (!isPasswordValid) {
            return res.status(403).send({
                error: 'The login information was incorrect'
            })
        }
        console.log('user 2', isPasswordValid)
        const userJson = user.toJSON()
        res.send({
            user: userJson,
            token: jwtSignUser(userJson)
        })
    }
    catch (err) {
        res.status(500).send({
            error: 'An error has occured trying to log in'
        })
    }
}
module.exports = {
    register,
    login
}


