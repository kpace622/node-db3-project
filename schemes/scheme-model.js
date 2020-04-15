const db = require('../data/db-config');

function find() {
    return db('schemes')
}

function findById(id) {
    return db('schemes')
    .where({id})
    .first()
}

// function findSteps(id) {
//     return db('steps')
//     .join('schemes', 'schemes.id', 'steps.scheme_id')
//     .select('steps.id', 'steps.step_number', 'steps.instructions', 'steps.scheme_id')
//     .where({scheme_id: id})
// }

// function findSteps(id) {
//     return db('steps as st')
//       .join('schemes as sc', 'sc.id', 'st.scheme_id')
//       .select('st.id', 'st.step_number', 'st.instructions', 'st.scheme_id')
//       .where({ scheme_id: id })
//   }

  function findSteps(id) {
    return db("steps")
      .join("schemes", "schemes.id", "steps.scheme_id")
      .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
      .where({ scheme_id: id })
    //   .orderBy("steps.step_number");
  }

// function findSteps(id){
//     return db('scheme as s')
//     .join('steps as st', 'st.scheme_id', 's.id')
//     .select('s.id', 's.scheme_name', 'st.step_number', 'st.instructions')
//     .where({scheme_name: scheme});
// }

function add(schemeData) {
    return db('schemes').insert(schemeData)
}

function update(changes, id) {
    return db('schemes')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db('schemes')
    .where({id})
    .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}