import React from "react";

const Preview = ({ elements }) => {
  return (
    <div>
      <h2>Vista Previa</h2>
      {elements.map((element) => (
        <div key={element.id}>
          {element.type === "text" ? (
            <p>{element.content}</p>
          ) : element.type === "image" ? (
            <img src={element.content} alt="Imagen" style={{ maxWidth: "100%" }} />
          ) : element.type === "button" ? (
            <button>{element.content}</button>
          ) : element.type === "video" ? (
            <iframe
              width="560"
              height="315"
              src={element.content}
              title="Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Preview;