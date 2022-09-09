const Student = require("../models/studentSchema");

exports.student_create = async (req, res) => {
  const { body: student } = req;

  const studentDB = new Student(student);

  await studentDB.save().catch((err) => console.log("UPS!", err));

  res.send({
    message: "Estudiante creado con exito",
    data: studentDB,
  });
};

exports.calificaciones = async (req, res) => {
  res.send({
    message: "calificaciones",
  });
};
