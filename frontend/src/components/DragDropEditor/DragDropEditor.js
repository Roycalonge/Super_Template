import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ComponentItem from './ComponentItem';
import './DragDropEditor.css';

const COMPONENTS = [
  { type: 'heading', label: 'Título Grande' },
  { type: 'paragraph', label: 'Párrafo' },
  { type: 'image', label: 'Imagen' },
  { type: 'video', label: 'Video' },
  { type: 'columns', label: 'Columnas' },
  { type: 'divider', label: 'Separador' }
];

export default function DragDropEditor() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="components-panel">
        <h3>Componentes</h3>
        <div className="components-grid">
          {COMPONENTS.map((comp) => (
            <ComponentItem key={comp.type} {...comp} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
}