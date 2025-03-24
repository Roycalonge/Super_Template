import React from 'react';
import DragDropEditor from '../components/DragDropEditor/DragDropEditor';
import DropZone from '../components/DragDropEditor/DropZone';
import './PageBuilder.css';

export default function PageBuilder() {
  return (
    <div className="editor-container">
      {/* Columna izquierda - Área de trabajo */}
      <div className="workspace-column">
        <DropZone />
      </div>
      
      {/* Columna derecha - Componentes */}
      <div className="components-column">
        <DragDropEditor />
      </div>
    </div>
  );
}