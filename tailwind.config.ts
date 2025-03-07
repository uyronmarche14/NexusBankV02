import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        system: ["IBM Plex Serif", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#121212", // Slightly Brighter Black
          light: "#1A1A1A", // Slightly Lighter Black
          dark: "#0A0A0A", // Darker but not pure black
        },
        secondary: {
          DEFAULT: "#282828", // Medium Dark Gray
          light: "#323232", // Lighter Gray
          dark: "#1E1E1E", // Darker Gray
        },
        accent: {
          DEFAULT: "#5E5CE6", // Subtle Purple
          light: "#7B7AE6", // Lighter Purple
          dark: "#4A49B8", // Darker Purple
        },
        background: {
          DEFAULT: "#121212", // Brighter Black
          light: "#1A1A1A", // Even Brighter Black
          dark: "#0A0A0A", // Darker Black
        },
        text: {
          DEFAULT: "#FFFFFF", // White
          light: "#F5F5F5", // Off-White
          dark: "#E0E0E0", // Light Gray
          muted: "#A0A0A0", // Medium Gray
        },
        success: {
          DEFAULT: "#00C853", // Green
          light: "#5EE07A", // Light Green
          dark: "#009624", // Dark Green
        },
        warning: {
          DEFAULT: "#FFD600", // Yellow
          light: "#FFEA00", // Light Yellow
          dark: "#C7A500", // Dark Yellow
        },
        danger: {
          DEFAULT: "#FF3D00", // Red
          light: "#FF6333", // Light Red
          dark: "#CC3000", // Dark Red
        },
        flare: {
          DEFAULT: "rgba(94, 92, 230, 0.08)", // Subtle Purple Glow
          light: "rgba(94, 92, 230, 0.05)", // Very Subtle Purple Glow
          dark: "rgba(94, 92, 230, 0.12)", // Stronger Purple Glow
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.08)", // Slightly More Visible White
          light: "rgba(255, 255, 255, 0.04)", // Subtle White
          dark: "rgba(255, 255, 255, 0.12)", // More Visible White
        },
      },
      boxShadow: {
        flare: "0 0 15px rgba(94, 92, 230, 0.15)",
        "flare-lg": "0 0 25px rgba(94, 92, 230, 0.2)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
        card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-subtle":
          "linear-gradient(to right, rgba(94, 92, 230, 0.03), rgba(0, 0, 0, 0))",
      },
      borderWidth: {
        hairline: "0.5px",
      },
    },
  },
  plugins: [],
} satisfies Config;
