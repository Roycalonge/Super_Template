import React from "react";

const Preview = ({ sections }) => {
  return (
    <div className="preview">
      {sections.map((section, index) => (
        <div key={index} className="preview-section">
          {section.type === "text" && <p>{section.content}</p>}
          {section.type === "image" && <img src={section.content} alt="Imagen" />}
          {section.type === "video" && (
            <iframe
              width="560"
              height="315"
              src={section.content}
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