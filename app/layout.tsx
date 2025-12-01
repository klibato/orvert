import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/navigation/header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
