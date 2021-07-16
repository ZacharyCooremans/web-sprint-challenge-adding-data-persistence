// build your `Task` model here
const db = require('../../data/dbConfig')

const getTasks = () => {
    return db('tasks')
        .leftJoin('projects', 'tasks.project_id', 'project.project_id')
        .select('task_id', 'task_description', 
                'task_notes', 'task_completed', 
                'project_name', 'project_description')
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
