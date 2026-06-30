import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter, Montserrat } from "next/font/google";
import PreloaderProvider from "@/components/PreloaderProvider";


const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Mostovik",
  description: "Corporate website",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <PreloaderProvider>
          {children}
        </PreloaderProvider>
      </body>
    </html>
  );
}
