import React from "react";
import PropTypes from "prop-types";

const Preview = ({ blocks }) => {
  return (
    <div>
      <h2>Vista Previa</h2>
      {blocks.map((block) => (
        <div key={block.id} className="block-preview">
          {block.type === "text" && <p>{block.content}</p>}
          {block.type === "image" && <img src={block.content} alt="Imagen" className="block-image" />}
          {block.type === "button" && <button className="block-button">{block.content}</button>}
          {block.type === "video" && (
            <iframe
              width="560"
              height="315"
              src={block.content}
              title="Video"
              frameBorder="0"
              allowFullScreen
              className="block-video"
            ></iframe>
          )}
        </div>
      ))}
    </div>
  );
};

Preview.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["text", "image", "button", "video"]).isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Preview;