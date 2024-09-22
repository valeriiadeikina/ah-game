export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Добавьте или измените правила по вашему усмотрению
    "no-unused-vars": "warn", // Предупреждение о неиспользуемых переменных
    "no-console": "off", // Отключение ошибки на console.log
  },
};
