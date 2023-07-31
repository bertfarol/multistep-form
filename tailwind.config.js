/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "sidebar-desktop": "url('./assets/bg-sidebar-desktop.svg')",
        "sidebar-mobile": "url('./assets/bg-sidebar-mobile.svg')",
      },
    },
  },
  plugins: [],
};

