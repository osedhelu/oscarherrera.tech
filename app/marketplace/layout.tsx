import type { Metadata } from "next";
import { getMetadata } from "@/config/Metadata";
import MarketplaceNavbar from "@/components/Marketplace/Navbar";
import Web3Modal from "@/context/Web3Modal";

export const metadata: Metadata = getMetadata({
  title: "Oscar Herrera - Tienda de NFT",
  description:
    "¡Hola! 👋 Soy Oscar Herrera, un desarrollador Full Stack 💻 apasionado por crear soluciones innovadoras 🚀. En mi portafolio 📂 encontrarás ejemplos de mis proyectos, donde combino mi experiencia en desarrollo web front-end 🌐 y back-end 🖥️ para brindar soluciones eficientes y atractivas 🎯. ¡Explora mi trabajo y descubre cómo puedo ayudarte a hacer realidad tus ideas 💡.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Web3Modal>
      <MarketplaceNavbar />
      <main>{children}</main>
    </Web3Modal>
  );
}
