import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Machado Advocacia | Belgo Conceição Machado - OAB/TO 13.254",
  description:
    "Boutique jurídica especializada em Direito Penal, Tribunal do Júri, Licitações Públicas e Direito Previdenciário. Pau D'Arco – TO.",
  keywords: [
    "Belgo Conceição Machado",
    "Advogado Pau D'Arco TO",
    "Tribunal do Júri Tocantins",
    "Direito Penal OAB TO",
    "Licitações Tocantins",
    "Boutique Jurídica Tocantins",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${cinzel.variable} ${inter.variable}`}>
      <body className="bg-[#03070C] text-slate-200 selection:bg-[#C5A880]/30 selection:text-white antialiased overflow-x-hidden">
        {/* Glow sutil de iluminação editorial no topo */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_75%_50%_at_50%_-10%,rgba(197,168,128,0.1),transparent_70%)]"></div>
        </div>

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
