import React, { useState } from "react";
import StudentForm from "./Form";
import { createStudent } from "../../services/StudentService";
import { useNavigate } from "react-router-dom";

const studentInit = {
  nombre: "",
  apellido: "",
  edad: 0,
};

export default function StudentCreate() {
  const [student, setStudent] = useState(studentInit);
  const navigate = useNavigate();
  const guardar = async (event) => {
    event.preventDefault();

    const res = await createStudent(student);
    console.log(res);
    navigate(`/students`);
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
