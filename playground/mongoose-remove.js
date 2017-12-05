const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Do not get the object removed back
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Get the object removed back
// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();

Todo.findByIdAndRemove('5a26c984b0c93b3990f5dba0').then((todo) => {
  console.log(todo);
});
