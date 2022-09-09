const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    nombre: {
        type: String
    },
    apellido: {
        type: String
    },
    edad: {
        type: Number
    },
    materias: {
        type: Array
    },
    direccion: {
        type: Number
    }
});

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;