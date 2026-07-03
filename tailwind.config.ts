import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F0C",
        field: "#167C3D",
        sprout: "#1FA455",
        tint: "#EAF5EE",
        mist: "#F6F9F7",
        line: "#E3EAE4",
        loss: "#C2402A",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both",
        ticker: "ticker 32s linear infinite",
        "draw-line": "drawLine 1.6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
