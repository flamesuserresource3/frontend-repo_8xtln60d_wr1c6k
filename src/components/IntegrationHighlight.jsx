import { Link2, Shield, Users } from "lucide-react";

export default function IntegrationHighlight() {
  return (
    <section className="relative bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Integrazione Front‑Office e Back‑Office
            </h2>
            <p className="mt-3 text-slate-600">
              Dalla prima interazione alla fatturazione: ogni passaggio scorre in un unico ecosistema. 
              La collaborazione tra vendite, supporto e amministrazione elimina silos e raddoppia la velocità operativa.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="rounded-lg bg-cyan-50 p-2 text-cyan-600 ring-1 ring-cyan-100"><Link2 className="h-5 w-5"/></span>
                <div>
                  <p className="font-medium">Processi collegati end‑to‑end</p>
                  <p className="text-sm text-slate-600">Ticket che diventano attività, ordini che generano documenti, notifiche che attivano follow‑up.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="rounded-lg bg-violet-50 p-2 text-violet-600 ring-1 ring-violet-100"><Users className="h-5 w-5"/></span>
                <div>
                  <p className="font-medium">Team allineati per obiettivi</p>
                  <p className="text-sm text-slate-600">Organizza utenti in squadre, assegna flussi e attività anche a gruppi interi.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="rounded-lg bg-emerald-50 p-2 text-emerald-600 ring-1 ring-emerald-100"><Shield className="h-5 w-5"/></span>
                <div>
                  <p className="font-medium">Sicurezza e conformità (ACL)</p>
                  <p className="text-sm text-slate-600">Permessi granulari: ogni persona vede e modifica solo ciò che è di sua competenza.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-slate-500">CRM</p>
                  <p className="mt-1 font-medium">Contatti & Aziende</p>
                </div>
                <div className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-slate-500">Vendite</p>
                  <p className="mt-1 font-medium">Ordini & Preventivi</p>
                </div>
                <div className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-slate-500">Back‑Office</p>
                  <p className="mt-1 font-medium">Workflow & ACL</p>
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Un unico dato, un’unica verità. Aggiornamenti sincronizzati tra moduli senza ridondanze.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
