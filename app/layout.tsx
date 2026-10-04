import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cookie = localFont({
  src: "./Cookie-Regular.ttf",
  variable: "--font-cookie",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "D&A Doce Amor — Bolos Artesanais e Sobremesas | Vila Carmosina, Itaquera",
  description:
    "Bolos vulcão, caseirinhos para o café, sobremesas geladas e bolos decorados para festas em Itaquera e Guaianazes. Peça pelo WhatsApp ou nos aplicativos de delivery.",
  openGraph: {
    title: "D&A Doce Amor — Bolos Artesanais em Itaquera",
    description:
      "Massa molhadinha, recheio generoso e sabor inconfundível. Encomendas para festas e entregas no mesmo dia.",
    type: "website",
    locale: "pt_BR"
  },
  icons: {
    icon: "/logomarca.webp",
    apple: "/logomarca.webp"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cookie.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
