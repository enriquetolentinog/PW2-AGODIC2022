import React from "react";

export default function Hijo(props) {
  const cambiarNombrePadre = () => {
    props.cambiarNombrePadre("Checo Perez");
  };

  const cambiarNombreAbuelo = () => {
    props.cambiarNombreAbuelo("Pepe Perez");
  };
  return (
    <>
      <p>
        Soy el hijo, mi padre se llama {props.nombrePadre}, mi abuelo se llama{" "}
        {props.nombreAbuelo} y yo me llamo {props.nombre}
      </p>

      <button onClick={cambiarNombrePadre}>Cambiar nombre a mi padre</button>
      <button onClick={cambiarNombreAbuelo}>Cambiar nombre a mi abuelo</button>
    </>
  );
}
