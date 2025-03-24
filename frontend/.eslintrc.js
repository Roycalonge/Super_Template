module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:testing-library/react', // Desactivado temporalmente
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
    // 'testing-library', // Desactivado temporalmente
  ],
  rules: {
    // Reglas personalizadas para frontend
    'no-unused-vars': 'warn', // Cambiar errores de variables no usadas a advertencias
    'react/prop-types': 'off', // Desactivar advertencias de prop-types
  },
};
