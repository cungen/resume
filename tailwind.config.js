/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    content: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                print: { raw: 'print' },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
