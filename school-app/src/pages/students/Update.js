import React, { useEffect, useState } from "react";
import StudentForm from "./Form";

const studentInit = {
  nombre: "",
  apellido: "",
  edad: 0,
};

export default function UpdateStudent() {
  const [student, setStudent] = useState(studentInit);

  useEffect(() => {
    // obtener el id desde la url
    // Consultar al estudiante de la base de datos
  }, []);

  const guardar = (event) => {
    event.preventDefault();

    // guardar la info actualizar
    console.log("guardando en Actualizar",student);
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
      titulo={"Actulizar estudiante"}
      handleChange={handleChange}
      handleSubmit={guardar}
      student={student}
    />
  );
}
