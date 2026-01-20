/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                beige: {
                    50: '#f8f5f1',
                    100: '#efe4d8',
                    200: '#e5d4c0',
                    300: '#d4c4b0',
                },
                brown: {
                    700: '#6b4423',
                    800: '#4a2f18',
                    900: '#3b2414',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
