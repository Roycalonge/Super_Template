import React, { useState, useEffect } from "react";
import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";
import Button from "./ui/Button"; // ✅ Ruta corregida
import axios from "axios";

const DraggableComponent = ({ id, children, position, styles, onUpdate }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    position: "absolute",
    left: transform ? `${transform.x + position.x}px` : `${position.x}px`,
    top: transform ? `${transform.y + position.y}px` : `${position.y}px`,
    cursor: "grab",
    ...styles,
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="p-4 border rounded-lg">
      {children}
      <button onClick={() => onUpdate(id)} className="ml-2 bg-gray-200 px-2 py-1 rounded">✏️</button>
    </div>
  );
};

const DroppableArea = ({ id, children }) => {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className="relative w-full h-screen border-2 border-dashed rounded-lg">
      {children}
    </div>
  );
};

export default function DragDropEditor() {
  const [components, setComponents] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pages/last") // ✅ Ruta absoluta
      .then((response) => {
        setComponents(response.data.components || []);
      })
      .catch((error) => {
        console.error("Error al obtener los componentes:", error);
      });
  }, []);

  const handleDrop = (event) => {
    const newComponent = { id: `comp-${components.length}`, type: "button", position: { x: 50, y: 50 }, styles: {} };
    setComponents((prev) => [...prev, newComponent]);
    axios.post("http://localhost:5000/api/pages/update", { components: [...components, newComponent] })
      .then((response) => {
        console.log("Componente actualizado:", response.data);
      })
      .catch((error) => {
        console.error("Error al actualizar el componente:", error);
      });
  };

  const handleUpdate = (id) => {
    setSelectedComponent(id);
  };

  const handleStyleChange = (e) => {
    const { name, value } = e.target;
    setComponents((prev) =>
      prev.map((comp) =>
        comp.id === selectedComponent ? { ...comp, styles: { ...comp.styles, [name]: value } } : comp
      )
    );
    axios.post("http://localhost:5000/api/pages/update", { components })
      .then((response) => {
        console.log("Estilos actualizados:", response.data);
      })
      .catch((error) => {
        console.error("Error al actualizar los estilos:", error);
      });
  };

  return (
    <DndContext onDragEnd={handleDrop}>
      <div className="flex gap-4 p-4">
        <div className="p-4 border rounded-lg w-1/4">
          <DraggableComponent id="button" position={{ x: 0, y: 0 }} onUpdate={handleUpdate}>
            <Button>Botón</Button>
          </DraggableComponent>
        </div>
        <DroppableArea id="canvas">
          {components.map((comp) => (
            <DraggableComponent
              key={comp.id}
              id={comp.id}
              position={comp.position}
              styles={comp.styles}
              onUpdate={handleUpdate}
            >
              <Button>{comp.type}</Button>
            </DraggableComponent>
          ))}
        </DroppableArea>
        {selectedComponent && (
          <div className="p-4 border rounded-lg w-1/4 bg-gray-100">
            <h3 className="font-bold mb-2">Editar Estilos</h3>
            <label className="block">Color:</label>
            <input type="color" name="backgroundColor" onChange={handleStyleChange} className="mb-2 w-full" />
            <label className="block">Tamaño:</label>
            <input type="number" name="fontSize" onChange={handleStyleChange} className="mb-2 w-full border px-2 py-1" />
          </div>
        )}
      </div>
    </DndContext>
  );
}