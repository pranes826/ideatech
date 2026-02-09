/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0B1414',
                primary: '#6EC1C3',
                'accent-glow': 'rgba(110, 193, 195, 0.3)',
                border: '#1E3A3A',
                section: '#121E1E', // Slightly lighter for cards/sections
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Or similar modern font
                orbitron: ['Orbitron', 'sans-serif'], // For headers if we import it
            },
            animation: {
                'glow-pulse': 'glow-pulse 3s infinite ease-in-out',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 10px rgba(110, 193, 195, 0.3)' },
                    '50%': { boxShadow: '0 0 20px rgba(110, 193, 195, 0.6)' },
                },
            },
        },
    },
    plugins: [],
}
