import { useDrag } from 'react-dnd';

export default function ComponentItem({ type, label }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div 
      ref={drag}
      className={`component-item ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.6 : 1 }}
    >
      {label}
    </div>
  );
}