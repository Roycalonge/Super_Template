import { useDrop } from 'react-dnd';

export default function DropZone() {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => console.log('Componente agregado:', item.type),
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  }));

  return (
    <div 
      ref={drop}
      className={`drop-zone ${isOver ? 'active' : ''}`}
      style={{
        minHeight: 'calc(100vh - 40px)',
        background: isOver ? '#f0f7ff' : '#f8f9fa'
      }}
    >
      {isOver ? (
        <div className="drop-message">Suelta para agregar</div>
      ) : (
        <div className="empty-message">Arrastra componentes aquí</div>
      )}
    </div>
  );
}