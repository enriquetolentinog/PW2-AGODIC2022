import React, { useState } from "react";
import StudentForm from "./Form";
import { createStudent } from "../../services/StudentService";

const studentInit = {
  nombre: "",
  apellido: "",
  edad: 0,
};

export default function StudentCreate() {
  const [student, setStudent] = useState(studentInit);
  const guardar = async (event) => {
    event.preventDefault();

    const res = await createStudent(student);
    console.log(res);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  return (
    <StudentForm
      titulo={"Crear estudiante"}
      handleChange={handleChange}
      handleSubmit={guardar}
      student={student}
    />
  );
}
