// frontend/src/Editor/StyleEditor.js
import React, { useState } from 'react';
import './StyleEditor.css';

const StyleEditor = ({ selectedElement, updateElementStyles }) => {
  const [color, setColor] = useState(selectedElement ? selectedElement.color : '');
  const [fontSize, setFontSize] = useState(selectedElement ? selectedElement.fontSize : 16);

  const handleColorChange = (e) => {
    setColor(e.target.value);
    updateElementStyles({ ...selectedElement, color: e.target.value });
  };

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    updateElementStyles({ ...selectedElement, fontSize: e.target.value });
  };

  return (
    <div className="style-editor">
      <h3>Editar Estilo</h3>
      <div className="style-editor-controls">
        <label>
          Color:
          <input type="color" value={color} onChange={handleColorChange} />
        </label>
        <label>
          Tamaño de Fuente:
          <input
            type="number"
            value={fontSize}
            onChange={handleFontSizeChange}
            min="10"
            max="100"
          />
        </label>
      </div>
    </div>
  );
};

export default StyleEditor;
