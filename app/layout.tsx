import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

export const metadata: Metadata = {
  title: "L'Or Vert - Growshop Professionnel",
  description: "Matériel de culture professionnelle : éclairage LED, systèmes hydroponiques, nutrition, climat. Expertise technique pour cultivateurs exigeants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
