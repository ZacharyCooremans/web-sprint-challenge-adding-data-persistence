// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res) => {
    Resource.getResources()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            err.status(500).json({
                message: err.message
            })
        }) 
})

router.post('/', (req, res) => {
    const resource = req.body
    Resource.addResources(resource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            err.status(500).json({
                message: err.message
            })
        })
})

module.exports = router
