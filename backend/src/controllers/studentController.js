const Student = require("../models/studentSchema");
const School = require("../models/schoolSchema");

exports.student_create = async (req, res) => {
  const { body: student } = req;

  const studentDB = new Student(student);

  await studentDB.save().catch((err) => console.log("UPS!", err));

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
      const {nombre, apellido, edad} = student;
      const data = await Student.updateOne({ nombre }, {nombre, apellido, edad});
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
  try{
    const {params: {id}} = req; 

    console.log(req);

    await Student.deleteOne({_id: id})
    //await Student.deleteOne({_id: req.params.id})

    res.send({message: "Estudiante eliminado con exito"})
  }
  catch(err){
    console.log(err)
    res.send(err);
  }
}

exports.student_getAll = async (req, res) => {
  const data = await Student.find().populate("school");  

  res.send(data);
}

exports.student_getById = async (req, res) => {
  const {params: {id}} = req; 

  const data = await Student.findOne({_id: id}).populate("school");

  res.send(data);
}

exports.calificaciones = async (req, res) => {
  res.send({
    message: "calificaciones",
  });
};
