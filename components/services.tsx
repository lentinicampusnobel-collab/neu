import { Handshake, ClipboardList, KeyRound, Building2 } from 'lucide-react'

const services = [
  {
    icon: Handshake,
    title: 'Maklerdienst',
    description:
      'Professionelle Vermittlung von Immobilien mit ehrlicher Beratung, marktgerechter Bewertung und persönlicher Betreuung von Anfang bis Abschluss.',
  },
  {
    icon: ClipboardList,
    title: 'Verwaltung',
    description:
      'Zuverlässige Haus- und Immobilienverwaltung – von der Nebenkostenabrechnung über die Instandhaltung bis zur Kommunikation mit Mietern.',
  },
  {
    icon: Building2,
    title: 'Kauf & Verkauf',
    description:
      'Wir begleiten Sie sicher durch den gesamten Kauf- oder Verkaufsprozess – von der Bewertung über die Vermarktung bis zum notariellen Abschluss.',
  },
  {
    icon: KeyRound,
    title: 'Vermietung & Verpachtung',
    description:
      'Passende Mieter und Pächter für Ihre Immobilie – inklusive Bonitätsprüfung, Vertragsgestaltung und reibungsloser Übergabe.',
  },
]

export function Services() {
  return (
    <section id="leistungen" className="bg-concrete border-y border-border/70">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Unsere Leistungen
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Alles rund um Ihre Immobilie
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Vier Kernbereiche, ein Anspruch: Ihre Immobilie kompetent und
            persönlich zu betreuen – aus einer Hand in Dillingen.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="mb-5 inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
