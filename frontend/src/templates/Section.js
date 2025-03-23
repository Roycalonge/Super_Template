import React from "react";

const Section = ({ type, content, updateSection }) => {
  const handleChange = (e) => {
    updateSection(e.target.value);
  };

  switch (type) {
    case "text":
      return (
        <div className="section">
          <textarea value={content} onChange={handleChange} placeholder="Escribe tu texto aquí" />
        </div>
      );
    case "image":
      return (
        <div className="section">
          <input type="text" value={content} onChange={handleChange} placeholder="URL de la imagen" />
          {content && <img src={content} alt="Imagen" />}
        </div>
      );
    case "video":
      return (
        <div className="section">
          <input type="text" value={content} onChange={handleChange} placeholder="URL del video" />
          {content && (
            <iframe
              width="560"
              height="315"
              src={content}
              title="Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      );
    default:
      return null;
  }
};

export default Section;