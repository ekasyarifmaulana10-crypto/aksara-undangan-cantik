import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import devicesShowcase from "@/assets/devices-showcase.jpg";
import { Reveal, useInView } from "./reveal";
import { SectionHeading } from "./section-heading";
import { categories, featureGroups, templates } from "./data";
import {
  IconArrowRight,
  IconCalendar,
  IconCheck,
  IconGift,
  IconHeadset,
  IconInfinity,
  IconLeaf,
  IconPalette,
  IconUsers,
} from "./icons";

/* ---------------- Value hook ---------------- */

function CountUp({ value, duration = 1400 }: { value: number; duration?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return <span ref={ref}>{n.toLocaleString("id-ID")}</span>;
}

const valueHighlights = ["No Subscription", "Tanpa Masa Aktif", "Unlimited Guest", "Harga Terjangkau"];

export function ValueHook() {
  return (
    <section className="relative border-y border-border bg-card py-20 md:py-28">
      <div className="container-page text-center">
        <Reveal>
          <span className="eyebrow">Harga Super Terjangkau</span>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-5 font-serif text-[1.1rem] tracking-[0.2em] text-muted-foreground uppercase">
            Mulai
          </p>
        </Reveal>
        <Reveal variant="scale" delay={120}>
          <p className="font-serif text-[3.4rem] leading-none text-primary sm:text-[5.5rem] lg:text-[7rem]">
            Rp<CountUp value={15000} />
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            Semua yang kamu butuhkan untuk membuat undangan digital yang berkesan. Undangan cantik
            tidak harus mahal.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {valueHighlights.map((h, i) => (
            <Reveal key={h} delay={260 + i * 80}>
              <div className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-background px-3 py-5">
                <IconCheck className="h-4 w-4 text-sage" />
                <span className="text-[0.78rem] leading-tight font-medium">{h}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Templates ---------------- */

export function TemplateShowcase() {
  const [active, setActive] = useState("Semua");
  const list = useMemo(
    () => (active === "Semua" ? templates : templates.filter((t) => t.categoryKey === active)),
    [active],
  );

  return (
    <section id="template" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Template Favorit"
          title="Ratusan Desain untuk Berbagai Selera"
          desc="Dari minimalis yang tenang sampai luxury black yang berani. Pilih tema yang paling menggambarkan cerita kalian."
        />

        <Reveal delay={120}>
          <div className="no-scrollbar mt-10 -mx-5 flex gap-2 overflow-x-auto px-5 md:mx-0 md:flex-wrap md:justify-center md:px-0">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-[0.8rem] transition-all duration-300",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-sage/50 hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
          {list.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 90} className="min-w-0">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={t.image}
                    width={640}
                    height={896}
                    loading="lazy"
                    alt={`Preview template undangan digital ${t.name} untuk ${t.couple}`}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 hidden items-end justify-center bg-primary/35 p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100 md:flex">
                    <span className="rounded-full bg-card px-5 py-2.5 text-[0.78rem] font-medium text-primary">
                      Live Demo
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 rounded-full bg-card/90 px-3 py-1 text-[0.6rem] tracking-[0.16em] text-primary uppercase backdrop-blur-sm">
                    {t.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <h3 className="font-serif text-lg leading-tight md:text-xl">{t.name}</h3>
                  <p className="mt-2 line-clamp-2 text-[0.78rem] leading-relaxed text-muted-foreground md:text-[0.82rem]">
                    {t.desc}
                  </p>
                  <a
                    href="#pengalaman"
                    className="mt-4 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-primary transition-colors hover:text-sage"
                  >
                    Live Demo
                    <IconArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Guest management ---------------- */

const guests = [
  { from: "Budi Santoso", to: "Budi & Keluarga", status: "Terkirim" },
  { from: "Ani Putri", to: "Ani & Partner", status: "Dibuka" },
  { from: "Rina Wulandari", to: "Rina & Keluarga", status: "Hadir" },
  { from: "Doni Prasetyo", to: "Doni & Rekan", status: "Terkirim" },
];

export function GuestUnlimited() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal variant="left">
            <span className="eyebrow">Fitur Unggulan</span>
            <h2 className="mt-3 text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem]">
              Sebar &amp; Ubah Nama Tamu <span className="text-primary">Tanpa Batas</span>
            </h2>
            <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
              Kelola daftar tamu dengan mudah, sebar undangan ke siapa pun, dan ubah nama tamu
              sesuka hati. Tidak ada kuota, tidak ada biaya tambahan.
            </p>
          </Reveal>

          <Reveal variant="left" delay={140}>
            <ul className="mt-7 space-y-3">
              {[
                "Tambah dan ubah nama tamu kapan saja",
                "Sebar ke jumlah penerima tanpa batas",
                "Pantau siapa yang sudah membuka undangan",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.9rem]">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="scale" delay={260}>
            <div className="mt-8 inline-flex items-center gap-4 rounded-3xl border border-sage/30 bg-background px-6 py-4">
              <IconInfinity className="h-10 w-10 text-primary" />
              <div>
                <p className="font-serif text-3xl leading-none text-primary">∞</p>
                <p className="mt-1 text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
                  Tanpa Batas
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="right" delay={120}>
          <div className="rounded-[1.75rem] border border-border bg-background p-4 shadow-lift sm:p-6">
            <div className="flex items-center justify-between gap-3 border-b border-border pb-4">
              <div className="min-w-0">
                <p className="truncate font-serif text-lg">Daftar Tamu</p>
                <p className="text-[0.7rem] text-muted-foreground">248 tamu · 12 grup</p>
              </div>
              <span className="shrink-0 rounded-full bg-primary px-3.5 py-1.5 text-[0.68rem] text-primary-foreground">
                + Tambah
              </span>
            </div>

            <ul className="divide-y divide-border">
              {guests.map((g, i) => (
                <li
                  key={g.from}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-4"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="min-w-0">
                    <p className="truncate text-[0.85rem] font-medium">
                      {g.from} <span className="text-sage">→</span> {g.to}
                    </p>
                    <p className="mt-1 text-[0.7rem] text-muted-foreground">Status: {g.status}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3.5 py-1.5 text-[0.68rem] text-muted-foreground">
                    Ubah
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-2 rounded-2xl card-matcha px-4 py-3 text-[0.72rem] text-muted-foreground">
              Kuota nama tamu: <span className="font-medium text-primary">tidak terbatas</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- All features ---------------- */

const groupIcons = [IconUsers, IconCalendar, IconPalette, IconGift, IconHeadset];

export function AllFeatures() {
  return (
    <section id="fitur" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Fitur Lengkap"
          title="Semua Fitur yang Kamu Butuhkan"
          desc="Tidak ada fitur penting yang disembunyikan di paket mahal. Semua tersedia sejak awal."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featureGroups.map((g, gi) => {
            const Icon = groupIcons[gi] ?? IconLeaf;
            return (
              <Reveal key={g.title} delay={(gi % 3) * 110} className="min-w-0">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-3xl border border-border p-6 md:p-7",
                    gi % 2 === 0 ? "bg-card" : "bg-secondary/40",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-sage/30 bg-background text-primary transition-transform duration-500 hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="truncate font-serif text-xl">{g.title}</h3>
                      <p className="truncate text-[0.72rem] text-muted-foreground">{g.caption}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[0.85rem] leading-snug">
                        <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience preview ---------------- */

const previewSlides = [
  { label: "Opening", tpl: templates[0]! },
  { label: "Couple", tpl: templates[4]! },
  { label: "Event", tpl: templates[1]! },
  { label: "Gallery", tpl: templates[8]! },
  { label: "RSVP", tpl: templates[3]! },
  { label: "Gift", tpl: templates[6]! },
  { label: "Closing", tpl: templates[9]! },
];

export function ExperiencePreview() {
  return (
    <section id="pengalaman" className="border-y border-border bg-secondary/35 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Live Preview"
          title="Rasakan Pengalaman Undangan Digital"
          desc="Setiap undangan tersusun rapi dari pembuka hingga penutup — dengan tema yang bisa kamu pilih sendiri."
        />
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 md:gap-6 md:px-8 lg:justify-center lg:px-8">
        {previewSlides.map((s, i) => (
          <Reveal
            key={s.label}
            variant="scale"
            delay={i * 70}
            className="w-[62vw] shrink-0 snap-center sm:w-[42vw] md:w-[26vw] lg:w-[10.5rem] xl:w-[11.5rem]"
          >
            <figure
              className="group"
              style={{ transform: `translateY(${(i % 2 === 0 ? 0 : 22)}px)` }}
            >
              <div className="overflow-hidden rounded-[1.4rem] border border-border bg-card shadow-soft">
                <img
                  src={s.tpl.image}
                  width={640}
                  height={896}
                  loading="lazy"
                  alt={`Tampilan bagian ${s.label} pada undangan digital tema ${s.tpl.name}`}
                  className="aspect-[9/16] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
              </div>
              <figcaption className="mt-3 text-center text-[0.68rem] tracking-[0.18em] text-muted-foreground uppercase">
                {s.label}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <div className="container-page mt-10 text-center">
        <Reveal>
          <a
            href="#template"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            Coba Live Demo
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Responsive devices ---------------- */

export function ResponsiveDevices() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <span className="eyebrow">Responsive</span>
          <h2 className="mt-3 text-[2rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.1rem]">
            Satu Undangan, Semua Perangkat
          </h2>
          <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
            Setiap tema dirancang responsive. Nyaman dibuka dari HP, tablet, maupun desktop tanpa
            perlu instal aplikasi apa pun.
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {["Ringan & cepat dibuka", "Tanpa aplikasi tambahan", "Tampil rapi di layar kecil", "Siap dibagikan via chat"].map(
              (x) => (
                <li key={x} className="flex items-start gap-2.5 text-[0.85rem]">
                  <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  <span>{x}</span>
                </li>
              ),
            )}
          </ul>
        </Reveal>

        <Reveal variant="scale" delay={120}>
          <div className="overflow-hidden rounded-[1.75rem] card-matcha shadow-lift">
            <img
              src={devicesShowcase}
              width={1408}
              height={912}
              loading="lazy"
              alt="Undangan digital AksaraCinta ditampilkan pada laptop, tablet, dan smartphone dengan tema berbeda"
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
