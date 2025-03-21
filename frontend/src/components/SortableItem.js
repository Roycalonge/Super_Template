// src/components/SortableItem.js
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ id, element, onContentChange }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleContentChange = (e) => {
    onContentChange(id, e.target.value);
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {element.type === "text" ? (
        <textarea
          placeholder="Escribe tu texto aquí"
          value={element.content}
          onChange={handleContentChange}
        />
      ) : element.type === "image" ? (
        <input
          type="text"
          placeholder="URL de la imagen"
          value={element.content}
          onChange={handleContentChange}
        />
      ) : element.type === "button" ? (
        <input
          type="text"
          placeholder="Texto del botón"
          value={element.content}
          onChange={handleContentChange}
        />
      ) : element.type === "video" ? (
        <input
          type="text"
          placeholder="URL del video"
          value={element.content}
          onChange={handleContentChange}
        />
      ) : null}
    </div>
  );
};

export default SortableItem;