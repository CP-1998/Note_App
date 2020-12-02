const router = require('express').Router()

// Your routes go here...

let notes = require('../db/db.json')

router.get('/title', (req, res) => {
  console.log(notes)
})

router.post('/text', (req, res) => {

  console.log(notes)
})

module.exports = router