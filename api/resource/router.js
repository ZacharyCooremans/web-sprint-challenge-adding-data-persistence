// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    res.json({message: 'goti it adasfd from resource'})
})

module.exports = router
