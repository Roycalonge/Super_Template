import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const PageList = ({ userId }) => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPages = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:5000/api/pages/user/${userId}?page=1&limit=10`);
      setPages(response.data);
    } catch (error) {
      console.error("Error al obtener las páginas:", error);
      setError("Error al obtener las páginas");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchPages();
  }, [fetchPages]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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

export default React.memo(PageList);
