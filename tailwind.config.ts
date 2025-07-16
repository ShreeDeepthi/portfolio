import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-cormorant)"],
        cursive: ["var(--font-great-vibes)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#f2e0d9", // Main light pinkish-beige
        foreground: "#8a6a5c", // Darker brown text
        primary: {
          DEFAULT: "#8a6a5c", // Main text color (darker brown)
          foreground: "#f2e0d9", // Light background
        },
        secondary: {
          DEFAULT: "#b89a94", // Darker pinkish-brown for nav/footer
          foreground: "#f2e0d9", // Text on secondary
        },
        accent: {
          DEFAULT: "#f8f0eb", // Lighter pinkish-beige for cards/alternating sections
          foreground: "#9f7866", // Text on accent
        },
        muted: {
          DEFAULT: "#f8f0eb", // For muted elements
          foreground: "#9f7866", // Text on muted
        },
        destructive: {
          DEFAULT: "hsl(0 84.2% 60.2%)", // Keeping default destructive for now, can be changed if needed
          foreground: "hsl(210 40% 98%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "card-hover": "0 10px 20px rgba(138, 106, 92, 0.1)" /* Use new foreground color for shadow */,
        "btn-hover": "0 4px 8px rgba(138, 106, 92, 0.1)" /* Use new foreground color for shadow */,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
