/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['content/**/*.md', 'content/**/*.html', 'layouts/**/*.html'],
    theme: {
        extend: {
            colors: {
                /* navy: '#082e68', */
                coral: '#f88379',
                navy: '#032448',
                /* papery: '#fffdf7', */
                papery: '#f0ebe0',
            },
            fontFamily: {
                'dancing-script': ['Dancing Script', 'cursive'],
            },
        },
    },
    plugins: [],
};
