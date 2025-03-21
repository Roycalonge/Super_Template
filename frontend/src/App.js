import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pages, setPages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  // Cargar páginas al iniciar
  useEffect(() => {
    const fetchPages = async () => {
      try {
        console.log("Haciendo solicitud al backend para obtener páginas...");
        const response = await axios.get("http://localhost:5000/api/pages");
        console.log("Datos recibidos del backend:", response.data);
        setPages(response.data);
      } catch (error) {
        console.error("Error al cargar las páginas:", error);
        setError("Error al cargar las páginas");
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };
    fetchPages();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Editor de Páginas Personalizable</h1>
      {error && <p style={styles.error}>{error}</p>}
      {loading ? (
        <p style={styles.loading}>Cargando páginas...</p>
      ) : (
        <ul style={styles.list}>
          {pages.map((page) => (
            <li key={page._id} style={styles.listItem}>
              <h2 style={styles.pageTitle}>{page.title}</h2>
              <p style={styles.pageContent}>{page.content}</p>
              <button style={styles.button}>Editar</button>
              <button style={styles.button}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Estilos CSS en línea
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
  loading: {
    textAlign: "center",
    color: "#666",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "15px",
    marginBottom: "10px",
  },
  pageTitle: {
    margin: "0 0 10px 0",
    color: "#333",
  },
  pageContent: {
    margin: "0 0 15px 0",
    color: "#666",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    padding: "8px 12px",
    marginRight: "10px",
    cursor: "pointer",
  },
};

export default App;