/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "scripts/*.js", "eslint/*.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module", ecmaFeatures: { jsx: true } },
  plugins: ["react-refresh", "@typescript-eslint", "sqt"],
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    "sqt/no-inline-strings": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
    "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
    "no-console": ["warn", { allow: ["warn", "error"] }],
  },
};
