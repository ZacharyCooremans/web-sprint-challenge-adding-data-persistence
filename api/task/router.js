// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', (req, res) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch()
})

router.post('/', (req, res) => {
    const task = req.body
    Task.addTask(task)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            err.status(500).json({
                message: err.message
            })
        })
})

module.exports = router