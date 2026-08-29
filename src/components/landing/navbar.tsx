import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "./data";

export function Logo({ className, invert = false }: { className?: string; invert?: boolean }) {
  return (
    <a
      href="#beranda"
      aria-label="AksaraCinta, kembali ke beranda"
      className={cn("group flex items-center gap-2.5", className)}
    >
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors",
          invert ? "border-primary-foreground/30" : "border-primary/25",
        )}
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            d="M12 20s-7-4.3-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.7 12 20 12 20Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-serif text-[1.05rem] tracking-[0.16em] uppercase">
          Aksaracinta
        </span>
        <span
          className={cn(
            "mt-0.5 block text-[0.5rem] tracking-[0.34em] uppercase",
            invert ? "text-primary-foreground/60" : "text-muted-foreground",
          )}
        >
          Digital Invitation
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-border bg-card/92 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="container-page flex h-16 items-center justify-between gap-4 md:h-[4.5rem]"
      >
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-[0.82rem] tracking-wide text-foreground/75 transition-colors hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#pengalaman"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-[0.8rem] font-medium tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift lg:inline-flex"
          >
            Lihat Demo
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/70 lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-foreground transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute top-1.5 left-0 h-px w-full bg-foreground transition-all duration-200",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-foreground transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden border-t border-border bg-card/97 backdrop-blur-md transition-[max-height,opacity] duration-500 ease-out lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="container-page flex flex-col py-3">
          {navLinks.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: `${i * 35}ms` }}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-4 font-serif text-xl text-foreground/85"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="py-4">
            <a
              href="#pengalaman"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground"
            >
              Lihat Demo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
