import React from 'react';
import { FiType, FiImage, FiColumns, FiYoutube, FiLink } from 'react-icons/fi';

const DragDropEditor = ({ onElementSelect }) => {
  const categories = [
    {
      title: "Texto",
      icon: <FiType />,
      elements: [
        { id: 'h1', name: "Título Grande", icon: "🔠" },
        { id: 'p', name: "Párrafo", icon: "📝" },
      ],
    },
    {
      title: "Multimedia",
      icon: <FiImage />,
      elements: [
        { id: 'image', name: "Imagen", icon: "🖼️" },
        { id: 'video', name: "Video", icon: "🎬" },
      ],
    },
    {
      title: "Layout",
      icon: <FiColumns />,
      elements: [
        { id: 'columns2', name: "2 Columnas", icon: "⏸️" },
        { id: 'divider', name: "Separador", icon: "➖" },
      ],
    },
  ];

  return (
    <div className="drag-drop-editor">
      <h3 className="sidebar-title">Componentes</h3>
      {categories.map((category) => (
        <div key={category.title} className="category">
          <div className="category-header">
            {category.icon}
            <span>{category.title}</span>
          </div>
          <div className="elements-grid">
            {category.elements.map((element) => (
              <button
                key={element.id}
                onClick={() => onElementSelect(element)}
                className="element-button"
              >
                <span className="element-icon">{element.icon}</span>
                <span>{element.name}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DragDropEditor;