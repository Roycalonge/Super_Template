import React from "react";

const Toolbox = ({ addSection }) => {
  return (
    <div className="toolbox">
      <button onClick={() => addSection("text")}>Agregar Texto</button>
      <button onClick={() => addSection("image")}>Agregar Imagen</button>
      <button onClick={() => addSection("video")}>Agregar Video</button>
    </div>
  );
};

export default Toolbox;