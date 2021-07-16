// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = () => {
    return db('projects')
}

const addProject = (project) => {
    return db('projects')
        .insert(project, 'project_id')
        .then(ids => ({id: ids[0]}))
}

module.exports = {
    getAll,
    addProject
}
