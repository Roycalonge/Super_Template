import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Super Template header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Super Template/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders content editor section', () => {
  render(<App />);
  const editorSection = screen.getByText(/Editor de Contenido/i);
  expect(editorSection).toBeInTheDocument();
});

test('renders drag and drop editor section', () => {
  render(<App />);
  const dragDropSection = screen.getByText(/Editor Drag & Drop/i);
  expect(dragDropSection).toBeInTheDocument();
});

test('renders footer with current year', () => {
  render(<App />);
  const currentYear = new Date().getFullYear();
  const footerElement = screen.getByText(`© ${currentYear} Super Template. Todos los derechos reservados.`);
  expect(footerElement).toBeInTheDocument();
});
