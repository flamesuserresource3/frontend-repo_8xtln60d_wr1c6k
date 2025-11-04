import { Rocket, Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.25),transparent_45%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <Building2 className="h-4 w-4" />
              <span>Front‑Office + Back‑Office, finalmente integrati</span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
              Yoreorder — CRM/Gestionale Integrato
            </h1>
            <p className="mt-4 text-white/80 leading-relaxed">
              Non un semplice CRM, ma una piattaforma ERP/CRM che trasforma i dati in azioni. 
              Unifica vendite, supporto e gestione interna per controllo, trasparenza e performance su tutti i livelli aziendali.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#moduli"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                <Rocket className="h-4 w-4" /> Esplora i moduli
              </a>
              <a
                href="#contatti"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Richiedi una demo
              </a>
            </div>
          </div>

          <div className="mt-10 w-full md:mt-0 md:max-w-md">
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                  <p className="text-white/60">Visione Unica</p>
                  <p className="mt-1 text-white font-medium">Scheda Azienda</p>
                </div>
                <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                  <p className="text-white/60">Offerte Mirate</p>
                  <p className="mt-1 text-white font-medium">Cataloghi & Listini</p>
                </div>
                <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                  <p className="text-white/60">Retention</p>
                  <p className="mt-1 text-white font-medium">Contatti & Follow‑up</p>
                </div>
                <div className="rounded-lg bg-slate-900/60 p-4 ring-1 ring-white/10">
                  <p className="text-white/60">Tracciabilità</p>
                  <p className="mt-1 text-white font-medium">Ticket → Workflow</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-white/60">
                Pensato per B2B complessi: personalizzazione, controllo accessi e flussi di lavoro visuali.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
