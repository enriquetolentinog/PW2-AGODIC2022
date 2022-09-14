const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        minlength: 4,
        unique: true
    }
});

const School = mongoose.model("school", SchoolSchema);
module.exports = School;