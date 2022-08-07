const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors')

const ErrorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomError) {
        return res.status(StatusCodes.statusCode).json({msg: err.message})
    }

    return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send('Something went wrong try again later')
}

module.exports = ErrorHandlerMiddleware