require('dotenv').config()
require('express-async-errors')
const ErrorHandlerMiddleware = require('./middleware/error-handler')
const NotFoundMiddleware = require('./middleware/not-found')

const express = require('express')
const app = express()

app.use(express.json())

app.use(NotFoundMiddleware)
app.use(ErrorHandlerMiddleware)

const port = process.env.PORT || 5000

const start = async() => {
    try {
        app.listen(port, () => {
            console.log(`the server is ON listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()