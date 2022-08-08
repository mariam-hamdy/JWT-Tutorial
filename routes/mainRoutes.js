const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/registerController')
const authorizationMiddleware = require('../middleware/authentication')

router.route('/login').post(login)
router.route('/dashboard').get(authorizationMiddleware,dashboard)

module.exports = router