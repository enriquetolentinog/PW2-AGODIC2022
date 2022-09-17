const Student = require("../models/studentSchema");
const School = require("../models/schoolSchema");

exports.student_high_average = async (req, res) => {
  const {
    params: { id },
  } = req;

  const { students } = await School.findOne({ _id: id })
    .populate("students")
    .select("students");

  let highAverageStudentStudent = {
    average: 0,
    student: "",
  };

  students.forEach(({ calificaciones, _id }) => {
    let sum = 0;
    calificaciones.forEach((cal) => {
      sum += cal;
    });

    let average = sum / calificaciones.lenght;

    highAverageStudent.average =
      average > highAverageStudent.average
        ? average
        : highAverageStudent.average;
    highAverageStudent.student =
      average > highAverageStudent.average ? _id : highAverageStudent.student;
  });

  res.send(highAverageStudentStudent);
};
