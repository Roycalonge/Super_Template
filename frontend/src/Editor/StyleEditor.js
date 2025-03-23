import React, { useState, useEffect } from "react";
import { updatePage } from "../services/api"; // Importa desde la ubicación correcta

const StyleEditor = ({ styles, onStylesChange }) => {
  const [css, setCss] = useState(styles);

  useEffect(() => {
    setCss(styles);
  }, [styles]);

  const handleChange = (e) => {
    setCss(e.target.value);
    onStylesChange(e.target.value);
  };

  const handleSaveStyles = async () => {
    try {
      await updatePage("pageId", { styles: css }); // Suponiendo que "pageId" es el ID de la página
      console.log("Estilos guardados correctamente");
    } catch (error) {
      console.error("Error al guardar los estilos:", error);
    }
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
      <button onClick={handleSaveStyles}>Guardar Estilos</button>
    </div>
  );
};

export default StyleEditor;
