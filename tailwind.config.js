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
                secondary: "#EC4899",
                accent: "#10B981",
                background: "#F9FAFB",
                'text-dark': "#1F2937",
                'footerBackground': "#333333",
                accent: '#ea4335', // Contoh warna aksen (Google Red)
                dark: '#202124', // Contoh warna gelap untuk teks/latar belakang
                light: '#f8f9fa', // Contoh warna terang untuk teks/latar belakang
            },
            textShadow: {
                'lg': '0 2px 4px rgba(0, 0, 0, 0.5)',
            }
        },
    },
    plugins: [],
}

