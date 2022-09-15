const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],

    darkMode: 'class',

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography')
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    // ...
}
