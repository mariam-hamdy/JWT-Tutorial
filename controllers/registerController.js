const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')
const BadRequestError = require('../errors/bad-request')


const login = async(req, res) => {
    const {username, password} = req.body
    
    if (!username.trim() || !password.trim()) {
        throw new BadRequestError('username or password not provided')
    }
    const id = new Date().getDate()

    //backend sent the token to frontend in POST request
    const token = jwt.sign({id, username}, process.env.JWT_SECRET, {expiresIn: '30d'})

    res.status(StatusCodes.OK).json({msg: 'sucess login', token})
}

const dashboard = async(req, res) => {
    const username = req.user.username
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(StatusCodes.OK).json({msg: `hello ${username} welcome to dashboard`,
        secret: `your luckynumber is ${luckyNumber}`})
    
}

module.exports = {
    login,
    dashboard
}