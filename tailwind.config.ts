/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['content/**/*.md', 'content/**/*.html', 'layouts/**/*.html'],
    theme: {
        extend: {
            colors: {
                coral: '#f88379',
                /* navy: '#082e68', */
                navy: '#032448',
            },
        },
    },
    plugins: [],
};
