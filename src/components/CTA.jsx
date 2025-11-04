import { Mail, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contatti" className="relative bg-slate-900 py-14 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-2xl font-semibold">Vuoi vedere Yoreorder in azione?</h3>
              <p className="mt-2 text-white/80">
                Richiedi una demo personalizzata e scopri come integrare front‑office e back‑office nella tua azienda.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@yoreorder.com"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-4 py-2 text-slate-900 hover:bg-cyan-400"
              >
                <Mail className="h-4 w-4" /> Scrivici
              </a>
              <a
                href="tel:+39000000000"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> Contatto rapido
              </a>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Yoreorder. Tutti i diritti riservati.
        </p>
      </div>
    </section>
  );
}
