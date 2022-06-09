module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "simple-import-sort", "@typescript-eslint"],
  rules: {
    "no-unused-vars": "error",
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // React-related imports
          ["^react$", "^prop-types$"],
          // other external imports
          ["^@?\\w"],
          // app's internal relative imports
          ["^../../../"],
          ["^../../"],
          ["^../"],
          ["^./"],
          // image imports
          ["^.*\\.(png|jpg)$"],
          // CSS imports
          ["^\\u0000\\S+.css$", "^\\u0000\\S+(?<!.css)$"],
        ],
      },
    ],
  },
};
