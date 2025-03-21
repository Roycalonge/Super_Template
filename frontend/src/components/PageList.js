// src/components/PageList.js
import React from "react";

const PageList = ({ pages, onLoadPage }) => {
  return (
    <div>
      <h3>Páginas Guardadas</h3>
      <ul>
        {pages.map((page) => (
          <li key={page._id}>
            <h4>{page.title}</h4>
            <button onClick={() => onLoadPage(page._id)}>Cargar Página</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;