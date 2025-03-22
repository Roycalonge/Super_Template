import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const PageList = ({ userId }) => {
  const [pages, setPages] = useState([]);

  const fetchPages = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/pages/user/${userId}?page=1&limit=10`);
      setPages(response.data);
    } catch (error) {
      console.error("Error al obtener las páginas:", error);
    }
  }, [userId]);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

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
