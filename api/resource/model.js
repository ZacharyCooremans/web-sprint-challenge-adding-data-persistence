// build your `Resource` model here
const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources')
}

const addResources = (resource) => {
    return db('resources')
        .insert(resource, 'resource_id')
        .then(ids => ({ id: ids[0]}))
}

module.exports = {
    getResources,
    addResources
}
