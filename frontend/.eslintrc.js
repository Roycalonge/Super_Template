module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:testing-library/react', // Asegúrate de que esta línea esté presente
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'testing-library', // Asegúrate de que esta línea esté presente
  ],
  rules: {
    // Tus reglas personalizadas aquí
  },
};