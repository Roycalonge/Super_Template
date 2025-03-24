import React from 'react';
import { FiPlus, FiLayout, FiType, FiImage, FiSettings } from 'react-icons/fi';

const PageBuilder = () => {
  return (
    <div className="google-sites-editor">
      {/* Barra superior (como Google Sites) */}
      <header className="editor-header">
        <h1>Mi Página</h1>
        <button className="publish-button">Publicar</button>
      </header>

      {/* Barra lateral izquierda */}
      <div className="sidebar">
        <ToolButton icon={<FiPlus />} label="Insertar" />
        <ToolButton icon={<FiType />} label="Texto" />
        <ToolButton icon={<FiImage />} label="Imágenes" />
        <ToolButton icon={<FiLayout />} label="Layouts" />
        <ToolButton icon={<FiSettings />} label="Tema" />
      </div>

      {/* Lienzo principal */}
      <div className="canvas">
        <div className="section" draggable>
          <h2 contentEditable>Haz clic para editar</h2>
        </div>
      </div>
    </div>
  );
};

const ToolButton = ({ icon, label }) => (
  <button className="tool-button">
    {icon}
    <span>{label}</span>
  </button>
);