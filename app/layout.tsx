import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const fuente = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Mi portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={fuente.className}>{children}</body>
    </html>
  );
}
