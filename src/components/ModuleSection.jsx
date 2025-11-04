import { Building2, ClipboardList, FileText, Package, Ticket, Bell, Calendar, Users } from "lucide-react";

function FeatureItem({ icon: Icon, title, description }) {
  return (
    <li className="flex items-start gap-3">
      <span className="rounded-md bg-slate-50 p-2 text-slate-700 ring-1 ring-slate-200"><Icon className="h-5 w-5"/></span>
      <div>
        <p className="font-medium text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </li>
  );
}

function ModuleCard({ label, title, description, features, badgeColor = "bg-cyan-100 text-cyan-700" }) {
  return (
    <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${badgeColor.replace("bg-", "ring-")}`}>{label}</span>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600">{description}</p>
      <ul className="mt-5 space-y-3">
        {features.map((f, idx) => (
          <FeatureItem key={idx} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </ul>
    </div>
  );
}

export default function ModuleSection() {
  const modules = [
    {
      label: "MODULO 1",
      title: "Gestione Relazioni con il Cliente",
      description:
        "Personalizza l’offerta e mantieni relazioni proattive: schede azienda centralizzate, cataloghi dedicati, contatti e promemoria.",
      badgeColor: "bg-cyan-100 text-cyan-700",
      features: [
        { icon: Building2, title: "Scheda Azienda Centralizzata", description: "Visione unica su dati anagrafici, amministrativi, contatti chiave e storico." },
        { icon: Package, title: "Cataloghi di Vendita Dedicati", description: "Assegna cataloghi, prodotti e listini specifici per ogni azienda B2B." },
        { icon: Bell, title: "Comunicazione Proattiva", description: "Notifiche e promemoria strategici collegati ai contatti chiave." },
        { icon: Ticket, title: "Ticket → Flussi di Lavoro", description: "Tracciabilità completa: il ticket attiva automaticamente attività interne." },
      ],
    },
    {
      label: "MODULO 2",
      title: "Flusso di Vendita e Documenti",
      description:
        "Dall’interesse alla fatturazione: processi snelli, automatizzati e sempre documentati.",
      badgeColor: "bg-violet-100 text-violet-700",
      features: [
        { icon: FileText, title: "Documenti Essenziali", description: "Crea e archivia Preventivi, Fatture (W.I.P.) e DDT." },
        { icon: ClipboardList, title: "Ordini Tracciati", description: "Registra ordini anche con pagamento esterno per avviare logistica ed evasione." },
      ],
    },
    {
      label: "MODULO 3",
      title: "Gestione Risorse Interne",
      description:
        "Back‑office potenziato: ruoli, permessi, workflow visuali e lavoro di squadra.",
      badgeColor: "bg-emerald-100 text-emerald-700",
      features: [
        { icon: Users, title: "ACL Granulari", description: "Definisci permessi precisi: ognuno vede e opera solo sul necessario." },
        { icon: Calendar, title: "Workflow & Attività", description: "Crea, gestisci e monitora flussi; attività anche calendarizzate." },
        { icon: ClipboardList, title: "Assegnazione a Team", description: "Assegna flussi, attività ed eventi a interi gruppi per continuità operativa." },
      ],
    },
  ];

  return (
    <section id="moduli" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Moduli principali
          </h2>
          <p className="mt-3 text-slate-600">
            Ogni modulo è pensato per creare valore immediato e misurabile, connesso agli altri senza frizioni.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <ModuleCard key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}
