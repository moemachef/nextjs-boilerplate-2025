import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { configs as airbnbLegacyConfigs } from 'eslint-config-airbnb-extended/legacy';
import globals from 'globals';
import importX from 'eslint-plugin-import-x';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Global ignores
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      '**/next-env.d.ts',
      '.storybook/**',
    ],
  },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  // Airbnb rules (legacy mapping) with React + TypeScript support
  ...airbnbLegacyConfigs.react.typescript,
  {
    plugins: {
      'import-x': importX,
    },
    settings: {
      // Use import-x generic resolver with TypeScript + Node support
      'import-x/resolver': {
        typescript: { project: true, alwaysTryTypes: true },
        node: true,
      },
    },
  },
  {
    rules: {
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    },
  },
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/*.stories.tsx', '**/*.stories.ts'],
    plugins: {
      'import-x': importX,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      // Allow devDependencies in tests and stories
      'import/no-extraneous-dependencies': 'off',
      'import-x/no-extraneous-dependencies': 'off',
    },
  },
];

export default eslintConfig;
