import React from 'react';
import { Helmet } from 'react-helmet';
import RichTextEditor from './components/RichTextEditor';
import DragDropEditor from "./components/DragDropEditor";
import './App.css';

const App = () => {
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
        <section className="editor-section">
          <h2>Editor de Contenido</h2>
          <RichTextEditor />
        </section>

        <DragDropEditor />
      </main>

      <footer>
        <p>© 2024 Super Template. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App; // ✅ SOLO UNA VEZ
