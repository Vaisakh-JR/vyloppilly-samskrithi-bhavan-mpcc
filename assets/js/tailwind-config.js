tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    red: '#800020', // Deep Crimson
                    gold: '#D4AF37', // Metallic Gold
                    dark: '#1a1a1a',
                    light: '#f9fafb',
                    gray: '#f4f4f4'
                }
            },
            fontFamily: {
                serif: ['"Cormorant Garamond"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
                'malayalam-serif': ['"Chilanka"', 'cursive'],
                'malayalam-sans': ['"Anek Malayalam"', 'sans-serif'],
            },
            backgroundImage: {
                'pattern': "url('https://www.transparenttextures.com/patterns/cubes.png')",
            }
        }
    }
}
