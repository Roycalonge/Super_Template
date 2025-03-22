import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem"; // ✅ Ruta corregida
import Button from "../components/ui/Button"; // ✅ Ruta corregida

const BlockEditor = ({ blocks, setBlocks }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setBlocks((blocks) => {
        const oldIndex = blocks.findIndex((block) => block.id === active.id);
        const newIndex = blocks.findIndex((block) => block.id === over.id);
        return arrayMove(blocks, oldIndex, newIndex);
      });
    }
  };

  const addBlock = (type) => {
    const newBlock = { id: `block-${blocks.length}`, type, content: "" };
    setBlocks([...blocks, newBlock]);
  };

  const handleContentChange = (id, content) => {
    const newBlocks = blocks.map((block) =>
      block.id === id ? { ...block, content } : block
    );
    setBlocks(newBlocks);
  };

  return (
    <div>
      <h2>Editor de Bloques</h2>
      <button onClick={() => addBlock("text")}>Agregar Texto</button>
      <button onClick={() => addBlock("image")}>Agregar Imagen</button>
      <button onClick={() => addBlock("button")}>Agregar Botón</button>
      <button onClick={() => addBlock("video")}>Agregar Video</button>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={blocks} strategy={verticalListSortingStrategy}>
          {blocks.map((block) => (
            <SortableItem
              key={block.id}
              id={block.id}
              block={block}
              onContentChange={handleContentChange}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default BlockEditor;