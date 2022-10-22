import React from "react";

export default function StudentForm(props) {
  const { titulo, handleChange, handleSubmit, student } = props;
  return (
    <div className="container">
      <h1>{titulo}</h1>
      <form onSubmit={handleSubmit}>
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
