import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"], // Archivos que ESLint analizará
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js: pluginJs,
      react: pluginReact,
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva 'React' must be in scope
      "react/prop-types": "off",        // Desactiva validación de PropTypes
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react/jsx-runtime", // Soporta JSX sin necesidad de React importado
    ],
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },
  },
];
