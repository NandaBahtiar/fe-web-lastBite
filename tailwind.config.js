/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#2ECC71",
                secondary: "#FF6B35",
                muted: "#7F8C8D",
                background: "#F9FAFB",
                'text-dark': "#1F2937",
            },
        },
    },
    plugins: [],
}

