import React from "react";
import { Helmet } from "react-helmet";
import RichTextEditor from "./components/RichTextEditor";
import DragDropEditor from "./components/DragDropEditor";
import "./App.css";

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

      <main className="container mx-auto p-4">
        <section className="editor-section mb-6">
          <h2 className="text-xl font-bold mb-2">Editor de Contenido</h2>
          <RichTextEditor />
        </section>

        <section className="dragdrop-section">
          <h2 className="text-xl font-bold mb-2">Editor Drag & Drop</h2>
          <DragDropEditor />
        </section>
      </main>

      <footer className="bg-gray-100 p-4 text-center">
        <p>© {new Date().getFullYear()} Super Template. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
