// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', (req, res, next) => {
    res.json({message: 'goti it'})
})

module.exports = router
