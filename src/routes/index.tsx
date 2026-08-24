import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Nav, ThemeToggle, Hero, Carta, Reservas, Vistas, Resenas, Footer } from "@/components/marea/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marea Club · Beach Club de tardeo y cócteles en Huelva" },
      {
        name: "description",
        content:
          "Marea Club, beach club de tardeo y coctelería de autor en la ría de Huelva. Cócteles, atardeceres y reservas frente al agua.",
      },
      { property: "og:title", content: "Marea Club · Cócteles & Atardeceres en la ría de Huelva" },
      {
        property: "og:description",
        content:
          "Tardeo, coctelería de autor y las mejores vistas de la ría de Huelva. Reserva tu mesa en Marea Club.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [night, setNight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", night);
  }, [night]);

  return (
    <main>
      <Nav />
      <Hero />
      <Carta />
      <Reservas />
      <Vistas night={night} />
      <Resenas />
      <Footer />
      <ThemeToggle night={night} onToggle={() => setNight((v) => !v)} />
    </main>
  );
}
