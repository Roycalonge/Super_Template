const Section = ({ type, content, onEdit }) => {
  switch (type) {
    case 'h1':
      return <h1 contentEditable onBlur={(e) => onEdit(e.target.innerHTML)}>{content}</h1>;
    case 'image':
      return <img src={content} alt="Uploaded" style={{ maxWidth: '100%' }} />;
    case 'columns2':
      return (
        <div className="two-columns">
          <div contentEditable onBlur={(e) => onEdit(e.target.innerHTML)}></div>
          <div contentEditable onBlur={(e) => onEdit(e.target.innerHTML)}></div>
        </div>
      );
    default:
      return <p contentEditable onBlur={(e) => onEdit(e.target.innerHTML)}>{content}</p>;
  }
};