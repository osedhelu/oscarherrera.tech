import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { getMetadata } from "@/config/Metadata";

const inter = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = getMetadata({
  title: "Oscar Herrera - Full Stack",
  description:
    "¡Hola! 👋 Soy Oscar Herrera, un desarrollador Full Stack 💻 apasionado por crear soluciones innovadoras 🚀. En mi portafolio 📂 encontrarás ejemplos de mis proyectos, donde combino mi experiencia en desarrollo web front-end 🌐 y back-end 🖥️ para brindar soluciones eficientes y atractivas 🎯. ¡Explora mi trabajo y descubre cómo puedo ayudarte a hacer realidad tus ideas 💡.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`dark:bg-black bg-white bg-no-repeat text-black dark:text-white ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
