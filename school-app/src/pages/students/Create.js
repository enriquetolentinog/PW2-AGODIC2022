import React, { useState } from "react";

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
    <div className="container">
      <h1>Crear estudiante</h1>
      <form onSubmit={guardar}>
        <div className="row">
          <div className="col">
            <input
              id="nombre"
              name="nombre"
              type="text"
              onChange={handleChange}
              value={student.nombre}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              id="apellido"
              name="apellido"
              type="text"
              onChange={handleChange}
              value={student.apellido}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              id="edad"
              name="edad"
              type="number"
              onChange={handleChange}
              value={student.edad}
            />
          </div>
        </div>
        {Number(student.edad) < 18 && (
          <div className="row">
            <div className="col">
              <label>No tienes permitido entrar aquí</label>
            </div>
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
}
