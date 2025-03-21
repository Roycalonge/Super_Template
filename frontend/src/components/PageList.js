// frontend/src/components/PageList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PageList = ({ userId }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const fetchPages = async () => {
      const response = await axios.get(`/api/pages/user/${userId}`);
      setPages(response.data);
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