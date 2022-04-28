const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    roll: {type: 'number'},
    name: {type: 'string'},
    age: {type: 'number'}
});

const model = mongoose.model('Student', Student);

module.exports = model;