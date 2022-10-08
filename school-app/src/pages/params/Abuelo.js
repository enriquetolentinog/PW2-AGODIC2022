import React, { useState } from "react";
import Padre from "./Padre";

export default function Abuelo() {
  const [miNombre, setMiNombre] = useState("Juan Perez");
  return (
    <>
      <p>Soy el abuelo y me llamo: {miNombre}</p>

      <Padre
        nombre="Pedro Perez"
        nombreAbuelo={miNombre}
        cambiarNombreAbuelo={setMiNombre}
      />
    </>
  );
}
