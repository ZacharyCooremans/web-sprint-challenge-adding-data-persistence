// build your `/api/tasks` router here
const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.json({message: 'goti it from task'})
})

module.exports = router