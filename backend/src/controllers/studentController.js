const Student = require("../models/studentSchema");
const School = require("../models/schoolSchema");

exports.student_create = async (req, res) => {
  const { body: student } = req;

  edad: 20
  const studentDB = new Student(student);
  await studentDB.save().catch((err) => console.log("UPS!", err));

  // const schoolDB = School.findOne({ _id: studentDB.school });
  // const schoolSaved = School.findOneAndUpdate(
  //   { _id: studentDB.school },
  //   { students: [...schoolDB.students, studentDB._id] }
  // );

  res.send({
    message: "Estudiante creado con exito",
    data: studentDB,
  });
};

exports.student_update = async (req, res) => {
  const { body: student } = req;

  try {
    //const {id} = req.params;
    let studentDB = await Student.find({ _id: student._id });
    if (studentDB) {
      const { nombre, apellido, edad } = student;
      const data = await Student.updateOne(
        { nombre },
        { nombre, apellido, edad }
      );
      res.send(data);
    }

    res.send({ msg: "Estudiante no encontrado" });
    //console.log(student);

    //const data2 = await Student.findOneAndUpdate({_id: student._id}, student);
  } catch (err) {
    console.log(err);
  }
};

exports.student_delete = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    console.log(req);

    await Student.deleteOne({ _id: id });
    //await Student.deleteOne({_id: req.params.id})

    res.send({ message: "Estudiante eliminado con exito" });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.student_getAll = async (req, res) => {
  const data2 = await Student.find().populate("school");

  res.send(data2);
};

exports.student_getById = async (req, res) => {
  const {
    params: { id },
  } = req;

  const data = await Student.findOne({ _id: id }).populate("school");

  res.send(data);
};

exports.calificaciones = async (req, res) => {
  res.send({
    message: "calificaciones",
  });
};

exports.student_promedio = async (req, res) => {
  try {
    const {
      params: { id, nombre },
    } = req;
    console.log("ENTRA");

    const data = await Student.findOne({ _id: id }).select("calificaciones");
    console.log("DATA", data);
    let suma = 0;
    data.calificaciones.forEach((element) => {
      suma += element;
    });
    const promedio = Number((suma / data.calificaciones.length).toFixed(2));
    res.send({ promedio });
  } catch (error) {
    console.log("ERROR", error);
    res.send(error);
  }
};
