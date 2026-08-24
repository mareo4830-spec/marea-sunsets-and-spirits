import { useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  onClick?: () => void;
};

/** Botón con halo especular que sigue al cursor por su interior. */
export function SpecularButton({
  children,
  href = "#reservas",
  variant = "solid",
  className = "",
  onClick,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  const base =
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-10 py-4 text-[0.72rem] uppercase tracking-[0.28em] transition-colors duration-500";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground"
      : "border border-border bg-transparent text-foreground hover:border-foreground/40";

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(120px circle at ${pos.x}% ${pos.y}%, ${
            variant === "solid"
              ? "color-mix(in oklab, var(--color-primary-foreground) 34%, transparent)"
              : "color-mix(in oklab, var(--color-foreground) 12%, transparent)"
          }, transparent 65%)`,
        }}
      />
      <span className="relative z-10">{children}</span>
    </a>
  );
}
