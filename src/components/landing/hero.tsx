import heroDevices from "@/assets/hero-devices.jpg";
import { Reveal } from "./reveal";
import { IconArrowRight } from "./icons";

const trust = [
  { value: "Rp15K+", label: "Harga Mulai" },
  { value: "∞", label: "Nama Tamu" },
  { value: "∞", label: "Penerima" },
  { value: "∞", label: "Revisi" },
];

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* soft botanical decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-32 h-[26rem] w-[26rem] rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute top-40 -right-24 h-[22rem] w-[22rem] rounded-full bg-beige/50 blur-3xl" />
        <svg
          viewBox="0 0 200 200"
          className="float-soft absolute top-24 right-[6%] hidden h-28 w-28 text-sage/25 lg:block"
        >
          <path
            d="M20 180C20 100 70 30 180 20c8 90-50 160-140 160H20Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M20 180C60 140 110 105 165 80" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-card px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              <span className="eyebrow">Undangan Digital Terjangkau</span>
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] sm:text-[3.4rem] lg:text-[4.6rem] xl:text-[5.2rem]">
              Undangan Digital
              <br className="hidden sm:block" /> Mulai{" "}
              <span className="relative inline-block text-primary">
                Rp15.000
                <svg
                  viewBox="0 0 300 14"
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 w-full text-sage/45"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C60 3 240 2 298 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 font-serif text-2xl text-primary/85 italic sm:text-[1.75rem]">
              Cantik, lengkap, dan siap dibagikan.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <p className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground">
              Ratusan pilihan tema untuk semua selera. Bebas sebar ke siapa saja, bebas ubah nama
              tamu, tanpa masa aktif — dengan fitur yang benar-benar lengkap.
            </p>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#template"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Lihat Template
                <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#fitur"
                className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-card px-7 py-4 text-sm font-medium text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50"
              >
                Lihat Fitur
              </a>
            </div>
          </Reveal>

          <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            {trust.map((t, i) => (
              <Reveal key={t.label} delay={340 + i * 90} className="min-w-0">
                <dt className="font-serif text-3xl text-primary sm:text-[2.1rem]">{t.value}</dt>
                <dd className="mt-1 text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {t.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>

        <Reveal variant="scale" delay={120} className="relative">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-lift">
            <img
              src={heroDevices}
              width={1200}
              height={1200}
              alt="Beberapa mockup smartphone menampilkan tema undangan digital AksaraCinta: botanical sage, luxury black gold, dan classic floral"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl card-matcha px-4 py-3 shadow-soft sm:left-8">
            <span className="font-serif text-2xl text-primary">10+</span>
            <span className="text-[0.7rem] leading-tight tracking-[0.12em] text-muted-foreground uppercase">
              Tema
              <br />
              Berbeda
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
