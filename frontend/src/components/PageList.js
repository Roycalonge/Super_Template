import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PageList = ({ userId }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/pages/user/${userId}`); // ✅ Ruta absoluta
        setPages(response.data);
      } catch (error) {
        console.error("Error al obtener las páginas:", error);
      }
    };
    fetchPages();
  }, [userId]);

  return (
    <div>
      <h2>Lista de Páginas</h2>
      <ul>
        {pages.map(page => (
          <li key={page._id}>{page.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PageList;