const router = require('express').Router()

// Connect other routers here
router.use('/api', require('./noteRoutes.js'))

module.exports = router