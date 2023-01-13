/* module.exports = {
    presets: [
        [
            require('@babel/preset-env'),
            {
                useBuiltIns: 'entry',
                corejs: 3,
            },
        ],
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
}; */

/* module.exports = {
    presets: ['@babel/preset-typescript', '@babel/preset-env'],
};
 */

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                targets: {
                    browsers: [
                        // Best practice: https://github.com/babel/babel/issues/7789
                        '>=1%',
                        'not ie 11',
                        'not op_mini all',
                    ],
                },
            },
        ],
    ],
    plugins: ['@babel/plugin-proposal-class-properties'],
};
