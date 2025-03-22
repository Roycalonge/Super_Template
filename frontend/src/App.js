import React, { useState } from "react";
import { Helmet } from "react-helmet";
import DragDropEditor from "./components/DragDropEditor"; // ✅ Ruta corregida
import Preview from "./components/Preview"; // ✅ Ruta corregida
import StyleEditor from "./components/StyleEditor"; // ✅ Ruta corregida
import "./App.css";

const App = () => {
  const [elements, setElements] = useState([]);
  const [styles, setStyles] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="App">
      <Helmet>
        <title>Super Template</title>
        <meta name="description" content="Crea páginas web increíbles con Super Template." />
      </Helmet>

      <header className="App-header">
        <h1>Super Template</h1>
        <p>¡Crea páginas web que superen a Google Sites!</p>
      </header>

      <main>
        <button onClick={() => setShowPreview(!showPreview)}>
          {showPreview ? "Editar" : "Vista Previa"}
        </button>

        {showPreview ? (
          <Preview elements={elements} />
        ) : (
          <>
            <DragDropEditor elements={elements} setElements={setElements} />
            <StyleEditor styles={styles} onStylesChange={setStyles} />
          </>
        )}
      </main>

      <footer className="App-footer">
        <p>© 2024 Super Template. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;