import Image from 'next/image'
import { Check } from 'lucide-react'

const points = [
  'Persönliche Betreuung durch feste Ansprechpartner',
  'Marktkenntnis in Dillingen und dem gesamten Saarland',
  'Transparente Abläufe und faire Konditionen',
  'Rundum-Service von der Bewertung bis zur Übergabe',
]

export function About() {
  return (
    <section id="ueber-uns">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-4">
            <Image
              src="/images/Logo/Logo1.png"
              alt="Ex-Lux-Immo GmbH Logo"
              width={72}
              height={72}
              className="h-16 w-16 object-contain mix-blend-multiply"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Über uns
            </span>
          </div>

          <h2 className="mt-6 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Ihr regionaler Immobilienpartner
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Die Ex-Lux-Immo GmbH steht für Immobilien mit Wert. Ob Verkauf,
            Vermietung oder Verwaltung – wir verbinden Fachwissen mit einem
            ehrlichen, persönlichen Umgang. Als regional verwurzeltes
            Unternehmen kennen wir den Markt vor Ort und setzen uns mit voller
            Überzeugung für Ihre Ziele ein.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <Image
            src="/images/Logo/Logo1.png"
            alt="Ex-Lux-Immo GmbH Logo"
            width={420}
            height={520}
            className="w-64 object-contain mix-blend-multiply md:w-72"
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent), linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)',
              maskImage:
                'linear-gradient(to right, transparent, #000 10%, #000 90%, transparent), linear-gradient(to bottom, transparent, #000 8%, #000 92%, transparent)',
              WebkitMaskComposite: 'source-in',
              maskComposite: 'intersect',
            }}
          />
        </div>
      </div>
    </section>
  )
}
