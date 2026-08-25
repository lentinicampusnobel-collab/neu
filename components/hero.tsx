import Image from 'next/image'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="start" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <MapPin className="size-3.5" />
            Dillingen · Saarland
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            Ihre Immobilie in{' '}
            <span className="text-primary">besten Händen</span>
          </h1>

          <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Die Ex-Lux-Immo GmbH begleitet Sie bei Kauf, Verkauf, Vermietung und
            Verwaltung Ihrer Immobilie – persönlich, kompetent und mit einem
            klaren Blick für Werte.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button
              render={<a href="#kontakt" />}
              nativeButton={false}
              size="lg"
            >
              Beratung anfragen
              <ArrowUpRight className="size-4" />
            </Button>
            <Button
              render={<a href="#leistungen" />}
              nativeButton={false}
              size="lg"
              variant="outline"
            >
              Unsere Leistungen
            </Button>
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-border/70 pt-6">
            {[
              { value: '4', label: 'Kernbereiche' },
              { value: '100%', label: 'Persönlich' },
              { value: 'Region', label: 'Verwurzelt' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="font-serif text-2xl font-semibold text-primary md:text-3xl">
                  {stat.value}
                </dt>
                <dd className="text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-xl sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/hero-house.png"
              alt="Modernes Wohnhaus mit gepflegtem Garten"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:block">
            <p className="font-serif text-lg font-semibold text-primary">
              Ex-Lux-Immo GmbH
            </p>
            <p className="text-sm text-muted-foreground">Immobilien mit Wert</p>
          </div>
        </div>
      </div>
    </section>
  )
}
