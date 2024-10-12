/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        otomanopee: ['"Otomanopee One"', "sans-serif"],
        outfit: ['"Outfit"', "sans-serif"],
      },
      borderRadius: {
        "custom-top": "20px 20px 0 0",
      },
      colors: {
        orangeCustom: "#f2682a",
        greenCustom: "#5b9a42",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        bounceUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        bounceUp: "bounceUp 0.3s ease-in-out",
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
