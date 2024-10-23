/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customBlue: "#B6DFFF", 
        navcolor: "#050B7F",
        fottercolor: "#0070C7",
        keyservice: "#2B4F85",
        keyserviceletters: "#414141",
        button1: "#2DC283",
        contactusgreen:"#2DC283"
      },
      fontFamily: {
        clash_display:['var(--font-clash-display)'],
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle, #E1E3FF 25%, #D9DDFF 100%)',
      },
    },
  },
  plugins: [],
};
