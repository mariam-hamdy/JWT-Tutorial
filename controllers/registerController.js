const {StatusCodes} = require('http-status-codes')
const BadRequestError = require('../errors/bad-request')

const login = async(req, res) => {
    const {username, password} = req.body
    
    if (!username.trim() || !password.trim()) {
        throw new BadRequestError('the data not provided')
    }

    res.status(StatusCodes.OK).json({msg: 'sucess login', username, password})
}

const dashboard = async(req, res) => {
    res.status(StatusCodes.OK).json({msg: 'welcome to dashboard'})
}

module.exports = {
    login,
    dashboard
}