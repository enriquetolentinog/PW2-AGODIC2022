import React, { useState } from "react";

const initState = {
    nombre: "",
    color: "#FFFFFF"
}

const Color = () => {
  const [color, setColor] = useState("00000");
  const [estructura, setEstructura] = useState(initState);

  const OnChangeColor = (event) => {
    const { value, name } = event.target;

    setEstructura({
        ...estructura,
        color: value
        
    });
  };

  return (
    <div>
      <input
        type="color"
        value={estructura.color}
        name="color"
        onChange={OnChangeColor}
      ></input>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div style={{backgroundColor: estructura.color}}>
        <p>{estructura.color}</p>
      </div>
    </div>
  );
};

export default Color;
