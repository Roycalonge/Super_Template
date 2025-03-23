import React, { useEffect, useState } from "react";
import { getPages } from "../services/api"; // Importa desde la ubicación correcta

const Preview = ({ blocks }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const data = await getPages();
        setPages(data);
      } catch (error) {
        console.error("Error al obtener las páginas:", error);
      }
    };
    fetchPages();
  }, []);

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

export default Preview;