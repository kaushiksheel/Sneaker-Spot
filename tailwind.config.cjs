/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            maxWidth: {
                container: "1200px"
            },
            width: {
                box: "400px"
            }
        }
    },
    plugins: []
};
