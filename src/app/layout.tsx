import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["500", "600", "700"],
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
    "Assessoria jurídica estratégica e de alta precisão em Direito Penal, Tribunal do Júri, Licitações e causas previdenciárias em Pau D'Arco – TO.",
  keywords: [
    "Belgo Conceição Machado",
    "Advogado Pau D'Arco TO",
    "Tribunal do Júri Tocantins",
    "Direito Penal OAB TO",
    "Licitações Tocantins",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${cinzel.variable} ${inter.variable}`}>
      <body className="bg-[#04080D] text-slate-100 selection:bg-[#C5A880]/30 selection:text-white antialiased overflow-x-hidden">
        {/* Background Decorativo Global */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(197,168,128,0.12),transparent_70%)]"></div>
        </div>
        
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
