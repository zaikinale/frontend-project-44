import globals from 'globals';
import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import fp from 'eslint-plugin-fp';

// Mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
  {
    languageOptions: { globals: globals.node },
    plugins: { import: importPlugin, fp },
  },
  ...compat.extends('airbnb-base'),
  {
    rules: {
      'no-console': 'off',
      'import/extensions': [
        'error',
        {
          js: 'always',
        },
      ],
    },
  },
];
