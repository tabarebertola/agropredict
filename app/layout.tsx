import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgroPredict AI — Predicción Inteligente del Mercado de Soja",
  description:
    "Análisis fundamental, Machine Learning y alertas en tiempo real para el mercado de soja argentino.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-body text-ink antialiased">{children}</body>
    </html>
  );
}
