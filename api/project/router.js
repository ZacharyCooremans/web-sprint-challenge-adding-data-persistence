// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.getAll()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    const project = req.body

    Project.addProject(project)
        .then(project => {
            res.status(201).json(project)
        })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'Umnmm something happened and you should fix it',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router
