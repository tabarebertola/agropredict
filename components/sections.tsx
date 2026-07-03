import { Icon, IconName } from "./icons";
import { tickerItems, metrics, chartSeries, variables, pipeline, steps } from "@/lib/mock-data";

/* ---------- Nav ---------- */
export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-field text-white">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M12 21V9M12 9c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6zM12 13c0-3-2.2-5-5-5 0 3 2.2 5 5 5z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            AgroPredict <span className="text-field">AI</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-ink/70 md:flex">
          <a href="#arquitectura" className="transition-colors hover:text-ink">Arquitectura</a>
          <a href="#dashboard" className="transition-colors hover:text-ink">Dashboard</a>
          <a href="#variables" className="transition-colors hover:text-ink">Variables</a>
          <a href="#como-funciona" className="transition-colors hover:text-ink">Cómo funciona</a>
        </nav>
        <a
          href="#dashboard"
          className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          Ver demo
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11,15,12,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,15,12,0.045) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-24 text-center md:pt-32">
        <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.25em] text-field">
          Inteligencia de mercado agrícola
        </p>
        <h1
          className="mx-auto mt-5 max-w-3xl animate-fade-up font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl"
          style={{ animationDelay: "90ms" }}
        >
          Predicción Inteligente del{" "}
          <span className="relative whitespace-nowrap text-field">
            Mercado de Soja
            <svg aria-hidden viewBox="0 0 300 12" className="absolute -bottom-2 left-0 w-full" preserveAspectRatio="none">
              <path d="M2 9c60-6 180-8 296-4" fill="none" stroke="#1FA455" strokeWidth="3" strokeLinecap="round" opacity="0.45" />
            </svg>
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl animate-fade-up text-lg text-ink/60" style={{ animationDelay: "180ms" }}>
          Análisis fundamental, Machine Learning y alertas en tiempo real.
        </p>
        <div className="mt-9 animate-fade-up" style={{ animationDelay: "270ms" }}>
          <a
            href="#dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-field px-7 py-3.5 font-medium text-white shadow-lg shadow-field/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-field/30 active:translate-y-0"
          >
            Ver Dashboard
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <TickerBar />
    </section>
  );
}

/* ---------- Ticker (elemento firma) ---------- */
function TickerBar() {
  const row = [...tickerItems, ...tickerItems];
  return (
    <div className="relative border-y border-line bg-ink py-3 text-white">
      <div className="flex w-max animate-ticker gap-10 whitespace-nowrap pl-6 font-mono text-[13px]" aria-hidden>
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-2.5">
            <span className="text-white/50">{t.label}</span>
            <span className="font-semibold tabular-nums">{t.value}</span>
            <span className={t.up ? "text-sprout" : "text-[#FF8A6B]"}>{t.delta}</span>
          </span>
        ))}
      </div>
      <span className="sr-only">Cinta de cotizaciones simuladas de referencia agrícola</span>
    </div>
  );
}

/* ---------- Arquitectura ---------- */
export function Architecture() {
  return (
    <section id="arquitectura" className="border-b border-line bg-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Arquitectura"
          title="Del dato crudo a la alerta en tu bolsillo"
          sub="Cada etapa del pipeline transforma la información hasta convertirla en una decisión accionable."
        />
        <ol className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-0">
          {pipeline.map((p, i) => (
            <li key={p.name} className="flex flex-col items-center">
              <div className="group w-full rounded-xl border border-line bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-field/40 hover:shadow-md">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-tint text-field transition-colors group-hover:bg-field group-hover:text-white">
                    {Icon[p.icon as IconName]({ className: "h-5 w-5" })}
                  </span>
                  <div>
                    <h3 className="font-display font-semibold">{p.name}</h3>
                    <p className="mt-0.5 text-sm text-ink/55">{p.desc}</p>
                  </div>
                </div>
              </div>
              {i < pipeline.length - 1 && (
                <span className="my-1.5 text-field/50">
                  <Icon.arrowDown className="h-5 w-5" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Dashboard demo ---------- */
export function DashboardDemo() {
  return (
    <section id="dashboard" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Dashboard · datos simulados"
          title="El mercado de un vistazo"
          sub="Precios de referencia, paridad de exportación y señal del modelo en una sola pantalla."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="group rounded-xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-field/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-ink/55">{m.label}</p>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[11px] ${
                    m.up ? "bg-tint text-field" : "bg-[#FBEAE5] text-loss"
                  }`}
                >
                  {m.delta}
                </span>
              </div>
              <p className="mt-3 font-mono text-3xl font-semibold tabular-nums tracking-tight">
                {m.value}
                {m.unit && <span className="ml-1.5 text-base font-normal text-ink/40">{m.unit}</span>}
              </p>
              <p className="mt-2 text-xs text-ink/45">{m.note}</p>
            </div>
          ))}
        </div>
        <PriceChart />
      </div>
    </section>
  );
}

/* ---------- Gráfico SVG puro ---------- */
function PriceChart() {
  const W = 960;
  const H = 300;
  const PAD = { t: 24, r: 16, b: 34, l: 56 };
  const data = chartSeries;
  const min = Math.min(...data) - 3;
  const max = Math.max(...data) + 3;
  const x = (i: number) => PAD.l + (i / (data.length - 1)) * (W - PAD.l - PAD.r);
  const y = (v: number) => PAD.t + (1 - (v - min) / (max - min)) * (H - PAD.t - PAD.b);
  const line = data.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${x(data.length - 1).toFixed(1)},${H - PAD.b} L${PAD.l},${H - PAD.b} Z`;
  const gridVals = [365, 372, 379, 386];

  return (
    <figure className="mt-10 rounded-xl border border-line bg-white p-5 shadow-sm md:p-7">
      <figcaption className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="font-display font-semibold">Soja CBOT — últimos 30 días</h3>
          <p className="text-xs text-ink/45">USD por tonelada · datos simulados</p>
        </div>
        <p className="font-mono text-sm tabular-nums">
          <span className="font-semibold">385.20</span>{" "}
          <span className="text-field">+6.4% 30d</span>
        </p>
      </figcaption>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Gráfico de línea del precio de la soja, tendencia alcista en 30 días">
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#167C3D" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#167C3D" stopOpacity="0" />
          </linearGradient>
        </defs>
        {gridVals.map((g) => (
          <g key={g}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(g)} y2={y(g)} stroke="#E3EAE4" strokeDasharray="3 5" />
            <text x={PAD.l - 10} y={y(g) + 4} textAnchor="end" className="fill-ink/40" fontSize="12" fontFamily="JetBrains Mono, monospace">
              {g}
            </text>
          </g>
        ))}
        {[0, 9, 19, 29].map((i) => (
          <text key={i} x={x(i)} y={H - 10} textAnchor="middle" className="fill-ink/40" fontSize="12" fontFamily="JetBrains Mono, monospace">
            d-{29 - i === 0 ? "hoy" : 29 - i}
          </text>
        ))}
        <path d={area} fill="url(#areaFill)" />
        <path d={line} fill="none" stroke="#167C3D" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1200" className="animate-draw-line" />
        <circle cx={x(data.length - 1)} cy={y(data[data.length - 1])} r="4.5" fill="#167C3D" />
        <circle cx={x(data.length - 1)} cy={y(data[data.length - 1])} r="9" fill="#167C3D" opacity="0.18" />
      </svg>
    </figure>
  );
}

/* ---------- Variables ---------- */
export function Variables() {
  return (
    <section id="variables" className="border-y border-line bg-mist py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Variables analizadas"
          title="Diez señales, una lectura"
          sub="El modelo pondera fundamentos de oferta, demanda, clima y macro local."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {variables.map((v) => (
            <div
              key={v.name}
              className="group rounded-xl border border-line bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-field/40 hover:shadow-md"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tint text-field transition-colors group-hover:bg-field group-hover:text-white">
                {Icon[v.icon as IconName]({ className: "h-5 w-5" })}
              </span>
              <h3 className="mt-3.5 font-display font-semibold">{v.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/55">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Cómo funciona ---------- */
export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead
          eyebrow="Cómo funciona"
          title="Cuatro pasos hasta la señal"
          sub="Un flujo continuo que corre todos los días de mercado."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-xl border border-line bg-white p-6">
              <span className="font-mono text-4xl font-semibold text-field/25">{s.n}</span>
              <h3 className="mt-3 font-display font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Alerta Telegram ---------- */
export function TelegramAlert() {
  return (
    <section className="border-y border-line bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-sprout">Alertas Telegram</p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
            La señal te encuentra, no al revés
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-white/60">
            Cuando el modelo detecta una oportunidad con confianza suficiente, el mensaje llega a tu
            teléfono con los factores que la explican. Sin ruido, sin operar a ciegas.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-3 border-b border-white/10 pb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-field text-white">
                <Icon.send className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold">AgroPredict Bot</p>
                <p className="text-xs text-white/40">hoy · 09:41</p>
              </div>
            </div>
            <div className="mt-3 rounded-xl rounded-tl-sm bg-white/[0.08] p-4 font-mono text-[13px] leading-relaxed">
              <p className="font-semibold">🌾 SOJA</p>
              <p className="mt-2">Chicago: <span className="tabular-nums">385 USD</span></p>
              <p>Probabilidad de suba: <span className="font-semibold text-sprout">68%</span></p>
              <p className="mt-2 text-white/70">Factores:</p>
              <ul className="mt-1 space-y-0.5 text-white/85">
                <li>• Chicago alcista</li>
                <li>• Clima seco</li>
                <li>• FAS positivo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold">
            AgroPredict <span className="text-field">AI</span>
          </p>
          <p className="mt-1 max-w-sm text-sm text-ink/50">
            Proyecto de inteligencia de mercado para el agro argentino. Interfaz demostrativa con
            datos simulados.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition-colors hover:border-ink/30 hover:bg-mist"
          >
            <Icon.github className="h-4 w-4" />
            GitHub
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            <Icon.mail className="h-4 w-4" />
            Contacto
          </button>
        </div>
      </div>
      <p className="mt-10 text-center font-mono text-xs text-ink/35">
        © 2026 AgroPredict AI · Demo frontend · Sin conexión a mercados reales
      </p>
    </footer>
  );
}

/* ---------- Encabezado de sección ---------- */
function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-field">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className="mt-3 text-ink/55">{sub}</p>
    </div>
  );
}
