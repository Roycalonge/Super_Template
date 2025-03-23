import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"; // Para drag & drop
import Section from "./Section"; // Componente para cada sección
import Toolbox from "./Toolbox"; // Barra de herramientas para agregar elementos

const PageBuilder = () => {
  const [sections, setSections] = useState([]);

  // Agregar una nueva sección
  const addSection = (type) => {
    const newSection = { id: Date.now(), type, content: "" };
    setSections([...sections, newSection]);
  };

  // Actualizar el contenido de una sección
  const updateSection = (id, newContent) => {
    const updatedSections = sections.map((section) =>
      section.id === id ? { ...section, content: newContent } : section
    );
    setSections(updatedSections);
  };

  // Reorganizar secciones con drag & drop
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedSections = Array.from(sections);
    const [removed] = reorderedSections.splice(result.source.index, 1);
    reorderedSections.splice(result.destination.index, 0, removed);

    setSections(reorderedSections);
  };

  return (
    <div className="page-builder">
      <Toolbox addSection={addSection} />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {sections.map((section, index) => (
                <Draggable key={section.id} draggableId={section.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Section
                        type={section.type}
                        content={section.content}
                        updateSection={(newContent) => updateSection(section.id, newContent)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default PageBuilder;