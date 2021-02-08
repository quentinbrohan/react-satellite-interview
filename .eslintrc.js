module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		createDefaultProgram: true,
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/no-unescaped-entities': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
