module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google", "prettier", "prettier/react"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
  },
  plugins: ["@typescript-eslint","prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
  },
};
