import React from "react";

const Preview = ({ blocks }) => {
  return (
    <div>
      <h2>Vista Previa</h2>
      {blocks.map((block) => (
        <div key={block.id}>
          {block.type === "text" && <p>{block.content}</p>}
          {block.type === "image" && <img src={block.content} alt="Imagen" />}
          {block.type === "button" && <button>{block.content}</button>}
          {block.type === "video" && (
            <iframe
              width="560"
              height="315"
              src={block.content}
              title="Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
};

export default Preview;