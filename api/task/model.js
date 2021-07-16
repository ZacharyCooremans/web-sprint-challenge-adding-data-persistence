// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks')
}

const addTask = (task) => {
    return db('tasks')
        .insert(task, 'task_id')
        .then(ids => ({task_id: ids[0]}))
}

module.exports = {
    getTasks,
    addTask

}
