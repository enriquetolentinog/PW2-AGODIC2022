import React, { useState } from "react";
import Hijo from "./Hijo";

export default function Padre(props) {
    const [miNombre, setMiNombre] = useState(props.nombre);
  return (
    <>
      <p>Soy el padre y tu abuelo me puso: {miNombre}</p>

      <Hijo
        nombre="José Perez"
        nombreAbuelo={props.nombreAbuelo}
        nombrePadre={miNombre}
        cambiarNombrePadre={setMiNombre}
        cambiarNombreAbuelo={props.cambiarNombreAbuelo}
      />
    </>
  );
}
