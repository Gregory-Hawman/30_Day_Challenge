const db = require('../data/dbConfig');

module.exports = {
    findUsers,
    findUserBy,
    findUserById,
    addUser,
    updateUser,
    deleteUser
};

function findUsers() {
    return db('users').select('id', 'username', 'name');
};

function findUserBy(filter) {
    return db('users').where(filter);
};

function findUserById(id) {
    return db('users').where({ id }).first();
};

async function addUser(user) {
    const [id] = await db('users').insert(user, 'id')
    return findById(id);
};

function updateUser(id, newData) {
    return findById(id).update(newData);
};

function deleteUser(id) {
    return findById(id).del();
};