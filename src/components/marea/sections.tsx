import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Sun, Moon, Star } from "lucide-react";
import { useState } from "react";

import { BlurImage, FadeUp, MaskReveal } from "./motion-primitives";
import { SpecularButton } from "./specular-button";

import logo from "@/assets/logo.png";
import pina from "@/assets/cocktail-pina.jpg";
import margarita from "@/assets/cocktail-margarita.jpg";
import atardecer from "@/assets/cocktail-atardecer.jpg";
import day1 from "@/assets/day-1.jpg";
import day2 from "@/assets/day-2.jpg";
import day3 from "@/assets/day-3.jpg";
import day4 from "@/assets/day-4.jpg";
import night1 from "@/assets/night-1.jpg";
import night2 from "@/assets/night-2.jpg";
import night3 from "@/assets/night-3.jpg";
import night4 from "@/assets/night-4.jpg";
import vistasImg from "@/assets/vistas.jpg";
import ambienteImg from "@/assets/ambiente.jpg";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "La Carta", href: "#carta" },
  { label: "Nuestras Vistas", href: "#vistas" },
  { label: "Reservas", href: "#reservas" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 sm:px-10">
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          className="inline-flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.3em] text-foreground/80 transition-opacity hover:opacity-60"
        >
          <Menu className="h-5 w-5" strokeWidth={1.2} />
          <span className="hidden sm:inline">Menú</span>
        </button>
        <span className="font-display text-lg tracking-[0.3em] uppercase">Marea</span>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex flex-col justify-center bg-[#020617] px-8 text-[#f8fafc]"
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="absolute top-5 left-5 sm:top-8 sm:left-10"
            >
              <X className="h-6 w-6" strokeWidth={1.2} />
            </button>
            <nav className="mx-auto flex w-full max-w-2xl flex-col gap-4">
              {LINKS.map((l, i) => (
                <div key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 0.8, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display block text-5xl font-light tracking-tight transition-opacity hover:opacity-50 sm:text-7xl"
                  >
                    {l.label}
                  </motion.a>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function ThemeToggle({ night, onToggle }: { night: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      aria-label={night ? "Activar modo día" : "Activar modo noche"}
      className="fixed right-5 bottom-5 z-40 grid h-13 w-13 place-items-center rounded-full border border-border bg-background/70 p-3.5 backdrop-blur-md transition-transform duration-300 hover:scale-105 sm:right-8 sm:bottom-8"
    >
      {night ? <Sun className="h-5 w-5" strokeWidth={1.2} /> : <Moon className="h-5 w-5" strokeWidth={1.2} />}
    </button>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
      <motion.img
        src={logo}
        alt="Logo de Marea Club"
        width={1024}
        height={1024}
        initial={{ opacity: 0, scale: 0.94, filter: "blur(16px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-64 max-w-full mix-blend-multiply sm:w-96 dark:mix-blend-screen dark:invert"
      />

      <h1 className="mt-2 text-[15vw] leading-[0.92] font-light sm:text-[9rem]">
        <MaskReveal delay={0.2}>El Verano</MaskReveal>
        <MaskReveal delay={0.35}>Que Te Llama</MaskReveal>
      </h1>

      <MaskReveal delay={0.55}>
        <p className="eyebrow mt-8">Cócteles &amp; Atardeceres</p>
      </MaskReveal>

      <FadeUp delay={0.75} className="mt-10">
        <SpecularButton>Reserva tu Mesa</SpecularButton>
      </FadeUp>
    </section>
  );
}

const COCTELES = [
  {
    name: "Piña Colada",
    img: pina,
    desc: "Ron blanco, coco cremoso y piña fresca de la vega onubense.",
  },
  {
    name: "Margarita",
    img: margarita,
    desc: "Tequila reposado, lima exprimida y sal marina de las salinas.",
  },
  {
    name: "Atardecer Marea",
    img: atardecer,
    desc: "Nuestra firma: naranja sanguina, vermut y un toque de romero.",
  },
];

export function Carta() {
  return (
    <section id="carta" className="px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl text-center">
        <MaskReveal>
          <p className="eyebrow">La Carta</p>
        </MaskReveal>
        <h2 className="mt-5 text-4xl font-light sm:text-6xl">
          <MaskReveal delay={0.1}>Nuestros Cócteles Más Vendidos</MaskReveal>
        </h2>

        <div className="no-scrollbar mt-16 -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-12 sm:overflow-visible sm:px-0">
          {COCTELES.map((c, i) => (
            <div
              key={c.name}
              className="w-[78vw] max-w-xs shrink-0 snap-center text-center sm:w-auto sm:max-w-none"
            >
              <BlurImage
                src={c.img}
                alt={`Cóctel ${c.name}`}
                width={900}
                height={900}
                delay={i * 0.12}
                className="aspect-square rounded-sm border border-border"
              />
              <h3 className="mt-6 text-2xl font-light">{c.name}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-16 flex justify-center">
          <SpecularButton href="#carta" variant="ghost">
            Ver Carta Completa
          </SpecularButton>
        </FadeUp>
      </div>
    </section>
  );
}

export function Reservas() {
  return (
    <section id="reservas" className="relative overflow-hidden px-6 py-28 sm:px-10 sm:py-44">
      <div className="relative mx-auto flex max-w-6xl flex-col items-center">
        {/* Foto flotante izquierda */}
        <div className="pointer-events-none absolute -top-10 left-0 hidden w-52 lg:block xl:w-64">
          <BlurImage
            src={vistasImg}
            alt="Vistas de la ría de Huelva desde la terraza"
            width={800}
            height={1000}
            className="aspect-[4/5] rounded-sm"
          />
          <p className="eyebrow mt-3">Vistas Increíbles</p>
        </div>

        {/* Foto flotante derecha */}
        <div className="pointer-events-none absolute right-0 bottom-0 hidden w-52 lg:block xl:w-64">
          <BlurImage
            src={ambienteImg}
            alt="Ambiente del club al atardecer"
            width={800}
            height={1000}
            delay={0.15}
            className="aspect-[4/5] rounded-sm"
          />
          <p className="eyebrow mt-3">Ambiente Único</p>
        </div>

        <div className="max-w-xl text-center">
          <h2 className="text-6xl font-light sm:text-8xl">
            <MaskReveal>¿Te vienes?</MaskReveal>
          </h2>
          <MaskReveal delay={0.12}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Paseo de la Ría, s/n · Muelle de Levante
              <br />
              21001 Huelva
            </p>
          </MaskReveal>
          <FadeUp delay={0.2} className="mt-10 flex justify-center">
            <SpecularButton href="#reservas">Reservar Ahora</SpecularButton>
          </FadeUp>
        </div>

        {/* Versión móvil / tablet de las fotos, sin superposiciones */}
        <div className="mt-16 grid w-full grid-cols-2 gap-6 lg:hidden">
          <div>
            <BlurImage
              src={vistasImg}
              alt="Vistas de la ría de Huelva desde la terraza"
              width={800}
              height={1000}
              className="aspect-[4/5] rounded-sm"
            />
            <p className="eyebrow mt-3 text-center">Vistas Increíbles</p>
          </div>
          <div className="mt-10">
            <BlurImage
              src={ambienteImg}
              alt="Ambiente del club al atardecer"
              width={800}
              height={1000}
              delay={0.1}
              className="aspect-[4/5] rounded-sm"
            />
            <p className="eyebrow mt-3 text-center">Ambiente Único</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const DAY = [
  { src: day1, alt: "Terraza del club a pleno sol" },
  { src: day2, alt: "Camas balinesas frente al agua" },
  { src: day3, alt: "Barra exterior de cócteles de día" },
  { src: day4, alt: "Pasarela de madera sobre la ría" },
];
const NIGHT = [
  { src: night1, alt: "Terraza iluminada por guirnaldas de noche" },
  { src: night2, alt: "Zona lounge con velas de noche" },
  { src: night3, alt: "Barra de cócteles iluminada de noche" },
  { src: night4, alt: "Pasarela sobre la ría con luces al fondo" },
];

export function Vistas({ night }: { night: boolean }) {
  const fotos = night ? NIGHT : DAY;
  return (
    <section id="vistas" className="px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <MaskReveal>
            <p className="eyebrow">Nuestras Vistas</p>
          </MaskReveal>
          <h2 className="mt-5 text-4xl font-light sm:text-6xl">
            <MaskReveal delay={0.1}>{night ? "El club de noche" : "El club de día"}</MaskReveal>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {fotos.map((f, i) => (
            <motion.div
              key={f.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
            >
              <BlurImage
                src={f.src}
                alt={f.alt}
                width={1200}
                height={900}
                delay={i * 0.08}
                className="aspect-[3/4] rounded-sm"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const RESENAS = [
  {
    text: "El mejor atardecer de Huelva sin discusión. Los cócteles están de diez y el trato es exquisito.",
    author: "Lucía Domínguez",
    time: "hace 2 meses",
  },
  {
    text: "Fuimos de tardeo un domingo y acabamos quedándonos hasta el cierre. Ambiente increíble.",
    author: "Javier Ramos",
    time: "hace 3 meses",
  },
  {
    text: "El Atardecer Marea es una obra de arte. Volveremos seguro con más gente.",
    author: "Marta Cabrera",
    time: "hace 5 meses",
  },
  {
    text: "Sitio precioso frente a la ría, música perfecta y nada saturado. Muy recomendable.",
    author: "Álvaro Pineda",
    time: "hace 6 meses",
  },
  {
    text: "Servicio rapidísimo incluso lleno. La piña colada, la mejor que he tomado en la provincia.",
    author: "Rocío Vázquez",
    time: "hace 8 meses",
  },
  {
    text: "Reservamos para un cumpleaños y lo bordaron. Las vistas de noche son otra historia.",
    author: "Sergio Belmonte",
    time: "hace 10 meses",
  },
];

export function Resenas() {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <MaskReveal>
            <p className="eyebrow">Reseñas en Google</p>
          </MaskReveal>
          <h2 className="mt-5 text-4xl font-light sm:text-6xl">
            <MaskReveal delay={0.1}>Lo que dicen de nosotros</MaskReveal>
          </h2>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {RESENAS.map((r, i) => (
            <FadeUp key={r.author} delay={(i % 3) * 0.08}>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current text-accent" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-base leading-relaxed italic">“{r.text}”</p>
              <p className="mt-4 text-sm">{r.author}</p>
              <p className="text-xs text-muted-foreground">{r.time}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#020617] px-6 py-20 text-[#f8fafc] sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logo}
            alt="Logo de Marea Club"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-36 invert"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#f8fafc]/60">
            Beach club de tardeo y coctelería de autor en la ría de Huelva. Abierto de jueves a domingo hasta el
            último atardecer del verano.
          </p>
        </div>

        <div>
          <p className="eyebrow text-[#f8fafc]/50">Legal</p>
          <ul className="mt-5 space-y-2 text-sm text-[#f8fafc]/75">
            <li>
              <a href="#" className="transition-opacity hover:opacity-60">
                Aviso legal
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-60">
                Política de privacidad
              </a>
            </li>
            <li>
              <a href="#" className="transition-opacity hover:opacity-60">
                Política de cookies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#f8fafc]/50">Contacto</p>
          <ul className="mt-5 space-y-2 text-sm text-[#f8fafc]/75">
            <li>
              <a href="tel:+34959000000" className="transition-opacity hover:opacity-60">
                +34 959 00 00 00
              </a>
            </li>
            <li>Paseo de la Ría, s/n</li>
            <li>21001 Huelva, España</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-[#f8fafc]/50">Cómo llegar</p>
          <iframe
            title="Ubicación de Marea Club en Huelva"
            src="https://www.google.com/maps?q=Muelle%20del%20Tinto%2C%20Huelva&output=embed"
            loading="lazy"
            className="mt-5 h-44 w-full rounded-sm border border-white/10"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <p className="mx-auto mt-16 max-w-6xl text-xs text-[#f8fafc]/40">
        © {new Date().getFullYear()} Marea Club · Huelva
      </p>
    </footer>
  );
}
