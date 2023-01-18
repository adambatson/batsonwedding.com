module.exports = {
    plugins: {
        'tailwindcss/nesting': {},
        tailwindcss: { config: './tailwind.config.ts' },
        autoprefixer: {},
        'postcss-preset-env': {},
        'postcss-mixins': {},
        'postcss-simple-vars': {},
        'postcss-nested': {},
    },
};
