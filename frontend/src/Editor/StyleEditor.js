import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const StyleEditor = ({ styles, onStylesChange }) => {
  const [css, setCss] = useState(styles);

  useEffect(() => {
    setCss(styles);
  }, [styles]);

  const handleChange = (e) => {
    setCss(e.target.value);
    onStylesChange(e.target.value);
  };

  return (
    <div className="p-4 border rounded-lg bg-gray-100">
      <h3 className="font-bold mb-2">Editor de Estilos</h3>
      <textarea
        value={css}
        onChange={handleChange}
        placeholder="Escribe tus estilos CSS aquí"
        className="w-full border p-2"
        aria-label="Editor de Estilos CSS"
      />
    </div>
  );
};

StyleEditor.propTypes = {
  styles: PropTypes.string.isRequired,
  onStylesChange: PropTypes.func.isRequired,
};

export default React.memo(StyleEditor);
