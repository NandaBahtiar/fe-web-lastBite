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
                text: "#1F2937",
                background: "#F9FAFB",
                footerBackground: "#111827",
                white: "#FFFFFF",
                transparantBlur: "rgba(46,204,113,0.6)",
            },
        },
    },
    plugins: [],
}

