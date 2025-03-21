import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";

const Editor = ({ elements, setElements }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setElements((elements) => {
        const oldIndex = elements.findIndex((el) => el.id === active.id);
        const newIndex = elements.findIndex((el) => el.id === over.id);
        return arrayMove(elements, oldIndex, newIndex);
      });
    }
  };

  const addElement = (type) => {
    const newElement = { id: `element-${elements.length}`, type, content: "" };
    setElements([...elements, newElement]);
  };

  const handleContentChange = (id, content) => {
    const newElements = elements.map((el) =>
      el.id === id ? { ...el, content } : el
    );
    setElements(newElements);
  };

  return (
    <div>
      <h2>Editor Drag-and-Drop</h2>
      <button onClick={() => addElement("text")}>Agregar Texto</button>
      <button onClick={() => addElement("image")}>Agregar Imagen</button>
      <button onClick={() => addElement("button")}>Agregar Botón</button>
      <button onClick={() => addElement("video")}>Agregar Video</button>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={elements} strategy={verticalListSortingStrategy}>
          {elements.map((element) => (
            <SortableItem
              key={element.id}
              id={element.id}
              element={element}
              onContentChange={handleContentChange}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Editor;