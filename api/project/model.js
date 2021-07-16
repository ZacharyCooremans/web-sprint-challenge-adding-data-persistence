// build your `Project` model here
const db = require('../../data/dbConfig')

async function getAll() {
    const data = await db('projects')
    const output = data.map((e) => {
        if(e.project_completed === 0) {
            return {...e, project_completed: false}
        } else if (e.project_completed === 1) {
            return {...e, project_completed: true}
        }
    })
    return output
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
