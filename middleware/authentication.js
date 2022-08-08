const {StatusCodes} = require('http-status-codes')
const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('../errors/unauthenticat')

const authorizationMiddleware = async(req,res,next) => {
    const {authorization} = req.headers 

    if(!authorization || !authorization.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided')
    }
    const token = authorization.split(' ')[1]
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const {id, username} = decoded
        req.user = {id, username}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this route')
    }
}

module.exports = authorizationMiddleware