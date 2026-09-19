import js from '@eslint/js';
import pluginNext from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
	{
		ignores: ['.next/**', 'node_modules/**'],
	},
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2024,
			globals: {
				...globals.browser,
				...globals.es2024,
				...globals.node,
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
			sourceType: 'module',
		},
		plugins: {
			'@next/next': pluginNext,
			'import': importPlugin,
			'react': react,
			'react-hooks': reactHooks,
		},
		rules: {
			...js.configs.recommended.rules,
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs['core-web-vitals'].rules,
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'import/order': [
				'warn',
				{
					'alphabetize': {
						caseInsensitive: true,
						order: 'asc',
					},
					'groups': ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'type'],
					'newlines-between': 'always',
				},
			],
			'no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
				},
			],
			'react/jsx-boolean-value': ['warn', 'always'],
			'react/prop-types': 'off',
		},
		settings: {
			'import/internal-regex': '^@/',
			'react': {
				version: 'detect',
			},
		},
	},
];
