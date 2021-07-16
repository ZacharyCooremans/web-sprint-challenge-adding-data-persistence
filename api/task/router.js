// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.getTasks()
        const output = tasks.map((e) => {
            return {
                task_id : e.task_id,
                task_description: e.task_description,
                task_notes: e.task_notes,
                task_completed: e.task_completed === 0 ? false : true,
                project_name: e.project_name,
                project_description: e.project_description
            }
        })
        res.json(output)
    } catch (err) {
        next(err)
    }
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