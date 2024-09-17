module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'plugin:prettier/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['@typescript-eslint', 'react', 'prettier'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-console': 'error',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.stories.*',
                    '**/.storybook/**/*.*',
                    '**/*.test.*',
                ],
                peerDependencies: true,
            },
        ],
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
    },
};
