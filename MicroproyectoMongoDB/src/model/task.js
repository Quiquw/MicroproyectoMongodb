const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
    usuario: String,
    contraseña: String,
    edad: Number,
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('tasks', TaskSchema);