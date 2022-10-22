import React, { useState } from "react";
import StudentForm from "./Form";

const studentInit = {
  nombre: "",
  apellido: "",
  edad: 0,
};

export default function StudentCreate() {
  const [student, setStudent] = useState(studentInit);
  const guardar = (event) => {
    event.preventDefault();

    // guardar la info
    console.log(student);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value,
    });

    console.log(student);
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
