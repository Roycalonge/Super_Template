// components/StyleEditor.js
import React, { useState } from "react";

const StyleEditor = ({ styles, onStylesChange }) => {
  const [css, setCss] = useState(styles);

  const handleChange = (e) => {
    setCss(e.target.value);
    onStylesChange(e.target.value);
  };

  return (
    <div>
      <h3>Editor de Estilos</h3>
      <textarea
        value={css}
        onChange={handleChange}
        placeholder="Escribe tus estilos CSS aquí"
      />
    </div>
  );
};

export default StyleEditor;