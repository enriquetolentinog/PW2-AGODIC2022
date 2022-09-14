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
    school: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "school"
    }]
});

const Student = mongoose.model("student", StudentSchema);

module.exports = Student;