import { useState } from "react";
import { cn } from "@/lib/utils";
import adminTeam from "@/assets/admin-team.jpg";
import ctaBanner from "@/assets/cta-banner.jpg";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Logo } from "./navbar";
import { blogPosts, comparison, faqs, testimonials } from "./data";
import {
  IconArrowRight,
  IconCheck,
  IconDevice,
  IconHeadset,
  IconInfinity,
  IconPalette,
  IconPen,
  IconSend,
  IconShield,
  IconSparkle,
  IconStar,
  IconTemplate,
  IconWallet,
} from "./icons";

/* ---------------- How it works ---------------- */

const steps = [
  { no: "01", title: "Pilih Template", desc: "Telusuri semua tema dan pilih yang paling pas.", Icon: IconTemplate },
  { no: "02", title: "Isi Data", desc: "Kirim data acara, foto, dan daftar tamu kalian.", Icon: IconPen },
  { no: "03", title: "Pembayaran", desc: "Selesaikan pembayaran mulai dari Rp15.000.", Icon: IconWallet },
  { no: "04", title: "Undangan Jadi", desc: "Link undangan siap disebar ke semua tamu.", Icon: IconSend },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="border-y border-border bg-card py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Cara Membuat Undangan"
          desc="Hanya empat langkah sederhana sampai undangan kamu siap dibagikan."
        />

        <ol className="relative mt-14 grid gap-8 md:grid-cols-4 md:gap-6">
          <span
            aria-hidden="true"
            className="absolute top-6 left-[1.4rem] hidden h-[calc(100%-3rem)] w-px bg-border md:block md:top-[1.4rem] md:left-0 md:h-px md:w-full"
          />
          <span
            aria-hidden="true"
            className="absolute top-6 left-[1.4rem] block h-[calc(100%-3rem)] w-px bg-border md:hidden"
          />
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 130} className="relative min-w-0 pl-14 md:pl-0">
              <li className="relative">
                <span className="absolute -left-14 top-0 grid h-11 w-11 place-items-center rounded-full border border-sage/35 bg-background text-primary md:static md:mb-6">
                  <s.Icon className="h-5 w-5" />
                </span>
                <p className="font-serif text-3xl text-sage/70">{s.no}</p>
                <h3 className="mt-2 font-serif text-xl">{s.title}</h3>
                <p className="mt-2 max-w-[16rem] text-[0.85rem] leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Admin service ---------------- */

export function AdminService() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal variant="scale">
          <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft">
            <img
              src={adminTeam}
              width={1200}
              height={900}
              loading="lazy"
              alt="Tim admin AksaraCinta membantu menyiapkan undangan digital pelanggan"
              className="w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal variant="right" delay={100}>
          <span className="eyebrow">Tidak Mau Ribet?</span>
          <h2 className="mt-3 text-[2rem] leading-[1.12] sm:text-[2.6rem]">Biar Kami yang Kerjakan.</h2>
          <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
            Cukup kirim data acara, foto, dan daftar tamu. Admin kami yang menyusun undangannya
            sampai rapi dan siap dibagikan — termasuk revisi tanpa batas.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {["Dibuatkan admin", "Revisi sepuasnya", "Bantuan via WhatsApp"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 text-[0.76rem] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href="#harga"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
          >
            Konsultasi Sekarang
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Why us ---------------- */

const reasons = [
  { title: "Banyak Pilihan Desain", desc: "Puluhan tema untuk setiap selera.", Icon: IconPalette },
  { title: "Mudah Digunakan", desc: "Tanpa perlu paham desain.", Icon: IconSparkle },
  { title: "Fitur Lengkap", desc: "RSVP, maps, galeri, hadiah.", Icon: IconCheck },
  { title: "Responsive", desc: "Rapi di semua ukuran layar.", Icon: IconDevice },
  { title: "Bagikan Tanpa Batas", desc: "Penerima sebanyak apa pun.", Icon: IconInfinity },
  { title: "Akses Selamanya", desc: "Tidak ada masa aktif.", Icon: IconShield },
];

export function WhyUs() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="Alasan Memilih Kami" title="Kenapa AksaraCinta?" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 110} className="min-w-0">
              <div className="flex h-full items-start gap-4 rounded-3xl card-matcha p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-sage/30 text-primary">
                  <r.Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="font-serif text-lg leading-tight">{r.title}</h3>
                  <p className="mt-1.5 text-[0.82rem] text-muted-foreground">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pricing ---------------- */

const mainBenefits = [
  "Tanpa Masa Aktif",
  "Unlimited Nama Tamu",
  "Unlimited Penerima",
  "RSVP & Ucapan",
  "Google Maps",
  "Galeri Foto & Video",
  "Musik Custom",
  "Amplop & Kado Digital",
  "Kustomisasi Tema",
  "Unlimited Revisi",
];

const plans = [
  {
    name: "Hemat",
    price: "15.000",
    note: "Untuk kamu yang ingin cepat, cantik, dan terjangkau.",
    features: mainBenefits,
    featured: true,
  },
  {
    name: "Premium",
    price: "35.000",
    note: "Tambahan tema premium dan bantuan penyusunan data.",
    features: [...mainBenefits, "Tema Premium", "Prioritas Pengerjaan"],
    featured: false,
  },
  {
    name: "Terima Beres",
    price: "75.000",
    note: "Semua dikerjakan admin sampai undangan siap sebar.",
    features: [...mainBenefits, "Tema Premium", "Dibuatkan Admin Penuh", "Pendampingan Hari-H"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="harga" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Harga"
          title="Satu Harga, Fitur Penuh"
          desc="Paket termurah sudah membawa hampir semua fitur. Pilih yang paling sesuai kebutuhan kalian."
        />

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 120} className="min-w-0">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[1.75rem] border p-7 transition-all duration-500 hover:-translate-y-1",
                  p.featured
                    ? "card-matcha shadow-lift ring-1 ring-matcha/60 lg:scale-[1.03]"
                    : "border-border bg-card/70",
                )}
              >
                {p.featured ? (
                  <span className="absolute -top-3 left-7 rounded-full bg-primary px-4 py-1.5 text-[0.62rem] tracking-[0.18em] text-primary-foreground uppercase">
                    Paling Populer
                  </span>
                ) : null}
                <p className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {p.name}
                </p>
                <p className="mt-4 font-serif text-[2.8rem] leading-none text-primary">
                  <span className="align-top text-lg">Rp</span>
                  {p.price}
                </p>
                <p className="mt-3 text-[0.83rem] leading-relaxed text-muted-foreground">{p.note}</p>
                <ul className="mt-6 flex-1 space-y-2.5 border-t border-border pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[0.84rem]">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-sage" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#template"
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
                    p.featured
                      ? "bg-primary text-primary-foreground hover:shadow-lift"
                      : "border border-primary/25 text-primary hover:border-primary/50",
                  )}
                >
                  Pilih Template
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Comparison ---------------- */

export function Comparison() {
  return (
    <section className="border-y border-border bg-card py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Perbandingan"
          title="Bandingkan dengan Jelas"
          desc="Gambaran umum dibanding layanan sejenis. Detail dapat berbeda tiap penyedia."
        />

        <Reveal delay={100} className="mt-12 hidden md:block">
          <div className="overflow-hidden rounded-3xl border border-border">
            <table className="w-full text-left text-[0.88rem]">
              <caption className="sr-only">Perbandingan fitur AksaraCinta dan layanan lain</caption>
              <thead>
                <tr className="bg-secondary/50">
                  <th scope="col" className="px-6 py-4 font-medium">Aspek</th>
                  <th scope="col" className="px-6 py-4 font-medium text-primary">AksaraCinta</th>
                  <th scope="col" className="px-6 py-4 font-medium text-muted-foreground">Layanan Lain</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c, i) => (
                  <tr key={c.aspect} className={cn(i % 2 === 1 && "bg-background/60")}>
                    <th scope="row" className="px-6 py-3.5 font-normal">{c.aspect}</th>
                    <td className="px-6 py-3.5 font-medium text-primary">{c.us}</td>
                    <td className="px-6 py-3.5 text-muted-foreground">{c.them}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 md:hidden">
          {comparison.map((c, i) => (
            <Reveal key={c.aspect} delay={(i % 4) * 70}>
              <div className="rounded-2xl border border-border bg-background p-4">
                <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  {c.aspect}
                </p>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="rounded-xl card-matcha px-3 py-2.5">
                    <p className="text-[0.62rem] tracking-[0.14em] text-sage uppercase">AksaraCinta</p>
                    <p className="mt-1 text-[0.85rem] font-medium text-primary">{c.us}</p>
                  </div>
                  <div className="rounded-xl border border-border px-3 py-2.5">
                    <p className="text-[0.62rem] tracking-[0.14em] text-muted-foreground uppercase">
                      Layanan Lain
                    </p>
                    <p className="mt-1 text-[0.85rem] text-muted-foreground">{c.them}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span
      aria-hidden="true"
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sage/30 bg-secondary/60 font-serif text-sm text-primary"
    >
      {initials}
    </span>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimoni"
          title="Kebahagiaan Mereka, Inspirasi untuk Kami"
        />
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:hidden">
        {testimonials.map((t) => (
          <article
            key={t.name}
            className="w-[78vw] shrink-0 snap-center rounded-3xl card-matcha p-6"
          >
            <TestimonialBody {...t} />
          </article>
        ))}
      </div>

      <div className="container-page mt-12 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 110} className="min-w-0">
            <article className="flex h-full flex-col rounded-3xl card-matcha p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
              <TestimonialBody {...t} />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TestimonialBody({
  name,
  role,
  rating,
  text,
}: {
  name: string;
  role: string;
  rating: number;
  text: string;
}) {
  return (
    <>
      <div className="flex gap-0.5 text-gold" aria-label={`Rating ${rating} dari 5`}>
        {Array.from({ length: rating }).map((_, i) => (
          <IconStar key={i} className="h-3.5 w-3.5" aria-hidden="true" />
        ))}
      </div>
      <p className="mt-4 flex-1 font-serif text-[1.15rem] leading-snug text-foreground/90 italic">
        “{text}”
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <Initials name={name} />
        <div className="min-w-0">
          <p className="truncate text-[0.85rem] font-medium">{name}</p>
          <p className="text-[0.72rem] text-muted-foreground">{role}</p>
        </div>
      </div>
    </>
  );
}

/* ---------------- FAQ ---------------- */

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-border bg-secondary/35 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow="FAQ" title="Pertanyaan yang Sering Ditanya" />

        <div className="mx-auto mt-12 max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={(i % 5) * 60}>
                <div className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="font-serif text-[1.15rem] leading-snug sm:text-xl">{f.q}</span>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-card transition-transform duration-400",
                          isOpen && "rotate-45 border-primary/40",
                        )}
                      >
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-12 pb-6 text-[0.9rem] leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Blog ---------------- */

export function BlogPreview() {
  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Blog"
            title="Inspirasi & Panduan"
            desc="Bacaan singkat untuk membantu kamu menyiapkan undangan yang berkesan."
            className="max-w-xl"
          />
          <Reveal delay={120}>
            <a
              href="#blog"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-sm font-medium text-primary transition-colors hover:border-primary/50"
            >
              Lihat Semua Blog
              <IconArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="min-w-0">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-soft">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    width={960}
                    height={640}
                    loading="lazy"
                    alt={p.title}
                    className="aspect-[3/2] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[0.68rem] tracking-[0.16em] text-muted-foreground uppercase">
                    <span className="text-sage">{p.tag}</span>
                    <span aria-hidden="true">·</span>
                    <span>{p.date}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl leading-tight">{p.title}</h3>
                  <p className="mt-2 flex-1 text-[0.85rem] leading-relaxed text-muted-foreground">
                    {p.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-primary">
                    Pelajari
                    <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCta() {
  return (
    <section className="container-page pb-20 md:pb-28">
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-[1.75rem] px-6 py-16 text-center md:px-16 md:py-24">
          <img
            src={ctaBanner}
            width={1920}
            height={1088}
            loading="lazy"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-primary/70" />
          <div className="relative mx-auto max-w-2xl">
            <span className="eyebrow text-primary-foreground/70">Mulai 15 Ribuan</span>
            <h2 className="mt-4 text-[2.1rem] leading-[1.1] text-primary-foreground sm:text-[3rem] lg:text-[3.6rem]">
              Undangan Cantik Tidak Harus Mahal.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[0.95rem] leading-relaxed text-primary-foreground/75">
              Mulai Rp15.000 dan buat undangan digital yang berkesan untuk hari spesialmu.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#template"
                className="inline-flex items-center justify-center rounded-full bg-warmwhite px-7 py-4 text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5"
              >
                Lihat Semua Template
              </a>
              <a
                href="#pengalaman"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/35 px-7 py-4 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:border-primary-foreground/70"
              >
                Coba Demo
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Footer ---------------- */

const footerCols = [
  { title: "Menu", links: ["Beranda", "Template", "Fitur", "Cara Kerja", "Harga"] },
  { title: "Bantuan", links: ["FAQ", "Panduan", "Syarat & Ketentuan", "Kebijakan Privasi", "Hubungi Kami"] },
  { title: "Informasi", links: ["Tentang Kami", "Blog", "Testimoni", "Kerjasama", "Affiliate"] },
];

function Social({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a
      href="#beranda"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/25 text-primary-foreground/80 transition-colors hover:border-primary-foreground/60 hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}

export function Footer() {
  const [openCol, setOpenCol] = useState<string | null>(null);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo invert />
            <p className="mt-5 max-w-sm text-[0.88rem] leading-relaxed text-primary-foreground/70">
              Undangan digital modern untuk momen spesial yang tak terlupakan.
            </p>
            <div className="mt-6 flex gap-2.5">
              <Social label="Instagram">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              </Social>
              <Social label="TikTok">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M14 4v10.5a3.5 3.5 0 1 1-3-3.46" />
                  <path d="M14 4c.6 2.5 2.2 3.9 5 4.1" />
                </svg>
              </Social>
              <Social label="WhatsApp">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M20 12a8 8 0 0 1-11.9 7L4 20l1.1-3.9A8 8 0 1 1 20 12Z" />
                  <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5 1-1l-1.4-.8-1 .8A5 5 0 0 1 10.9 11l.8-1L11 8.5c-.5 0-1 .4-1 1H9Z" />
                </svg>
              </Social>
              <Social label="Email">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <rect x="3" y="5" width="18" height="14" rx="2.5" />
                  <path d="m3.5 7 8.5 6 8.5-6" />
                </svg>
              </Social>
            </div>
          </div>

          <div className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
            {footerCols.map((col) => {
              const isOpen = openCol === col.title;
              return (
                <div key={col.title} className="border-b border-primary-foreground/12 sm:border-none">
                  <button
                    type="button"
                    onClick={() => setOpenCol(isOpen ? null : col.title)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between py-4 text-left sm:pointer-events-none sm:py-0"
                  >
                    <span className="text-[0.7rem] tracking-[0.2em] text-primary-foreground/60 uppercase">
                      {col.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn("text-primary-foreground/60 transition-transform sm:hidden", isOpen && "rotate-45")}
                    >
                      +
                    </span>
                  </button>
                  <ul
                    className={cn(
                      "grid overflow-hidden transition-all duration-400 sm:mt-4 sm:grid-rows-[1fr] sm:opacity-100",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <li className="min-h-0 overflow-hidden">
                      <ul className="space-y-2.5 pb-4 sm:pb-0">
                        {col.links.map((l) => (
                          <li key={l}>
                            <a
                              href="#beranda"
                              className="text-[0.85rem] text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                            >
                              {l}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              );
            })}

            <div className="pt-6 sm:pt-0">
              <p className="text-[0.7rem] tracking-[0.2em] text-primary-foreground/60 uppercase">Kontak</p>
              <ul className="mt-4 space-y-2.5 text-[0.85rem] text-primary-foreground/70">
                <li>halo@aksaracinta.id</li>
                <li>WhatsApp: 0812-0000-0000</li>
                <li>Setiap hari, 08.00–21.00 WIB</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-primary-foreground/15 pt-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <p className="font-serif text-xl">Dapatkan inspirasi tema terbaru</p>
            <p className="mt-1 text-[0.82rem] text-primary-foreground/60">
              Tanpa spam. Hanya kabar template dan promo pilihan.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-2"
            aria-label="Berlangganan newsletter"
          >
            <label htmlFor="newsletter" className="sr-only">
              Alamat email
            </label>
            <input
              id="newsletter"
              type="email"
              required
              placeholder="Masukkan email kamu"
              className="min-w-0 flex-1 rounded-full border border-primary-foreground/25 bg-transparent px-5 py-3.5 text-[0.85rem] text-primary-foreground placeholder:text-primary-foreground/45"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-warmwhite px-6 py-3.5 text-[0.82rem] font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5"
            >
              Kirim
            </button>
          </form>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-primary-foreground/15 pt-8 text-[0.72rem] text-primary-foreground/55">
          <IconHeadset className="h-4 w-4" aria-hidden="true" />
          <span>Pembayaran melalui transfer bank, e-wallet, dan QRIS — dikonfirmasi oleh admin.</span>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-[0.75rem] text-primary-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AksaraCinta. All rights reserved.</p>
          <p className="flex gap-5">
            <a href="#faq" className="transition-colors hover:text-primary-foreground">Syarat & Ketentuan</a>
            <a href="#faq" className="transition-colors hover:text-primary-foreground">Kebijakan Privasi</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
