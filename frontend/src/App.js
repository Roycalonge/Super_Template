import React from 'react';
import { Helmet } from 'react-helmet';
import RichTextEditor from './components/RichTextEditor';
import SortableList from './components/SortableList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* SEO Optimization */}
      <Helmet>
        <title>Super Template</title>
        <meta name="description" content="Crea páginas web increíbles con Super Template." />
      </Helmet>

      {/* Header */}
      <header className="App-header">
        <h1>Super Template</h1>
        <p>¡Crea páginas web que superen a Google Sites!</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Rich Text Editor Section */}
        <section className="editor-section">
          <h2>Editor de Contenido</h2>
          <RichTextEditor />
        </section>

        {/* Sortable List Section */}
        <section className="list-section">
          <h2>Lista de Páginas</h2>
          <SortableList />
        </section>
      </main>

      {/* Footer */}
      <footer>
        <p>© 2023 Super Template. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;