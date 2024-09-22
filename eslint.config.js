import { defineConfig } from 'eslint-define-config';

export default defineConfig({
    languageOptions: {
        globals: {
            // Здесь можно определить глобальные переменные
            window: 'readonly',
            document: 'readonly',
        },
        parserOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
        },
    },
    rules: {
        'no-unused-vars': 'warn', // Предупреждение о неиспользуемых переменных
        'no-console': 'off',      // Отключение ошибки на console.log
    },
});
