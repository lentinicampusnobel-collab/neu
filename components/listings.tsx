 'use client'

import Image from 'next/image'
import { MapPin, BedDouble, Bath, Maximize, Home, Building2, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

type Listing = {
  image: string
  watermark?: boolean
  hoverImages?: string[]
  title: string
  description?: string
  location: string
  price: string
  status: 'Verfügbar' | 'Bald verfügbar' | 'Neu' | 'Reserviert'
  rooms?: string
  baths?: string
  livingArea?: string
  units?: string
  area: string
}

const listings: Listing[] = [
  {
    image: '/images/Immo-1/Hausfront.jpg',
    hoverImages: [
      '/images/Immo-1/Garten Pool.jpg',
      '/images/Immo-1/Balkon OG.jpg',
      '/images/Immo-1/1. OG Zimmer.jpeg',
      '/images/Immo-1/Diele.jpeg',
      '/images/Immo-1/EG Küche.jpeg',
      '/images/Immo-1/EG Stube.jpeg',
      '/images/Immo-1/Kamin.jpeg',
      '/images/Immo-1/Küche 1. OG.jpeg',
      '/images/Immo-1/Küche UG.jpeg',
      '/images/Immo-1/Schlafzimmer EG.jpeg',
      '/images/Immo-1/Schlafzimmer UG.jpeg',
      '/images/Immo-1/WC-Dusche UG.jpeg',
      '/images/Immo-1/Wohnzimmer 1. OG.jpeg',
      '/images/Immo-1/Wohnzimmer 1.OG.jpeg',
      '/images/Immo-1/Wohnzimmer UG.jpeg',
    ],
    title: 'Großzügiges Ein- bis Dreifamilienhaus',
    description:
      'Dieses außergewöhnlich großzügige Ein- bis Dreifamilienhaus vereint viel Platz, flexible Nutzungsmöglichkeiten und zahlreiche Modernisierungen. Auf rund 335 m² Wohnfläche verteilt über vier Etagen bietet die Immobilie ideale Voraussetzungen für große Familien, Mehrgenerationenwohnen oder die Kombination aus Eigennutzung und Vermietung. Drei voll ausgestattete Wohneinheiten mit jeweils eigener Küche, Badezimmer und Wohnbereich ermöglichen eine vielseitige Nutzung. Der Außenbereich mit 8 × 4 m Pool, großzügiger Terrasse und Garten sowie die Garage mit elektrischem Tor runden das Angebot ab.',
    location: 'Lebach',
    price: '349.000 €',
    status: 'Neu',
    rooms: '9 Zi.',
    baths: '3 Bäder',
    livingArea: '335 m²',
    units: '3 Wohneinheiten',
    area: '535 m²',
  },
  {
    image: '/images/Immo-2/Flurkarte.jpg',
    hoverImages: [
      '/images/Immo-2/Ansicht 1.jpeg',
      '/images/Immo-2/Ansicht 2.jpeg',
      '/images/Immo-2/Ansicht 3.jpeg',
      '/images/Immo-2/Ansicht 4.jpeg',
      '/images/Immo-2/Ansicht 5.jpeg',
      '/images/Immo-2/Ansicht 6.jpeg',
      '/images/Immo-2/Ansicht 7.jpeg',
      '/images/Immo-2/Ansicht 8.jpeg',
      '/images/Immo-2/Flurkarte.jpg',
      '/images/Immo-2/Beispiel.jpeg',
    ],
    title: 'Großzügiges Hanggrundstück mit Entwicklungspotenzial',
    description:
      'Zum Verkauf steht ein außergewöhnliches Grundstück mit ca. 2.500 m² in traumhafter Hanglage direkt am Waldrand und dennoch nur wenige Minuten vom Ortskern von Schmelz entfernt. Das Grundstück liegt in einer ruhigen Anliegerstraße mit lockerer Bebauung und bietet viel Privatsphäre, Ruhe, Natur und eine beeindruckende Weitsicht über die Umgebung. Die Anbindung erfolgt über die B268 an Saarbrücken und Trier. Auf dem Grundstück befindet sich ein Bungalow, dessen Obergeschoss bereits zurückgebaut wurde. Ursprünglich war es ein Zweifamilienhaus aus dem Baujahr 1972 mit zwei Wohnungen. Außerdem gibt es eine obere und eine untere Garage. Die untere Garage ist derzeit für 75 € monatlich vermietet, wird beim Verkauf jedoch geräumt. Je nach Nutzungskonzept und baurechtlichen Vorgaben bietet sich ein Rückbau mit anschließender Neubebauung an. Nach Angaben des Eigentümers wurde eine Bebauung mit einem Mehrfamilienhaus mit bis zu sechs Wohneinheiten grundsätzlich in Aussicht gestellt. Eine schriftliche Bestätigung liegt nicht vor und ein Bauantrag wurde bislang nicht eingereicht. Die tatsächliche Bebaubarkeit ist eigenständig mit dem Bauamt zu klären. Bei entsprechender Bauweise können möglicherweise KfW-Fördermittel infrage kommen. Highlights: ca. 2.500 m² Grundstück, Hanglage mit Weitsicht, Waldrandlage, ruhige Anliegerstraße, drei Ebenen, zwei Garagen, Potenzial für bis zu sechs Wohneinheiten und ideal für Bauträger, Investoren oder private Bauherren. Preis: 220.000 €. Die Maklerprovision beträgt 3,57 % des Kaufpreises inklusive gesetzlicher Mehrwertsteuer von 19 %. Energieausweis vorhanden: Energiebedarf 13 kWh/(m²*a), Energieeffizienzklasse A+.',
    location: 'Schmelz',
    price: '239.000 €',
    status: 'Verfügbar',
    livingArea: 'nicht angegeben',
    area: '2.500 m²',
  },
  {
    image: '/images/Immo-3/Hausfront-SLS.jpg',
    watermark: true,
    title: 'Großzügiges Reihenmittelhaus mit Potenzial in ruhiger Anliegerlage',
    location: 'Saarlouis',
    price: 'VB',
    status: 'Bald verfügbar',
    rooms: '6 ZKB',
    baths: '1 Bad 1 GWC',
    livingArea: '222 m²',
    area: '474 m²',
  },
  {
    image: '/images/Immo-4/Aussenansicht.jpeg',
    watermark: true,
    hoverImages: [
      '/images/Immo-4/Bad.jpeg',
      '/images/Immo-4/Diele.jpeg',
      '/images/Immo-4/Dusche.jpeg',
      '/images/Immo-4/Küche.jpeg',
      '/images/Immo-4/Treppe.jpeg',
      '/images/Immo-4/Wohnbereich.jpeg',
    ],
    title: 'Historisches Haus in Hemmersdorf',
    location: 'Rehlingen-Siersburg',
    price: 'VB',
    status: 'Bald verfügbar',
    livingArea: '212 m²',
    area: '800 m²',
  },
  {
    image: '/images/immo-5.png',
    watermark: true,
    title: 'Baugrundstück in ruhiger Lage',
    location: 'Wallerfangen',
    price: 'VB',
    status: 'Reserviert',
    area: '620 m²',
  },
  {
    image: '/images/immo-6.png',
    watermark: true,
    title: 'Gewerbe- / Ladenfläche',
    location: 'Dillingen Zentrum',
    price: 'VB',
    status: 'Reserviert',
    area: '95 m²',
  },
]

const statusStyles: Record<Listing['status'], string> = {
  Neu: 'bg-accent text-accent-foreground',
  Verfügbar: 'bg-primary text-primary-foreground',
  'Bald verfügbar': 'bg-accent text-accent-foreground',
  Reserviert: 'bg-secondary text-secondary-foreground',
}

function ListingImage({ item, priceHovered }: { item: Listing; priceHovered: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const [hoverImageIndex, setHoverImageIndex] = useState(0)
  const hoverImages = item.hoverImages ?? []
  const visibleImage = isHovered ? hoverImages[hoverImageIndex] : item.image
  const visibleFileName = visibleImage.split('/').pop()

  useEffect(() => {
    if (!isHovered || hoverImages.length < 2) return

    const interval = window.setInterval(() => {
      setHoverImageIndex((currentIndex) => (currentIndex + 1) % hoverImages.length)
    }, 1800)

    return () => window.clearInterval(interval)
  }, [isHovered, hoverImages.length])

  return (
    <div
      className={`relative aspect-[4/3] ${priceHovered ? 'z-40 overflow-visible' : 'overflow-hidden'}`}
      onMouseEnter={() => setIsHovered(hoverImages.length > 0)}
      onMouseLeave={() => {
        setIsHovered(false)
        setHoverImageIndex(0)
      }}
    >
      <Image
        src={item.image || '/placeholder.svg'}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`${item.image.endsWith('Flurkarte.jpg') ? 'bg-muted object-contain' : 'object-cover'} transition-all duration-500 ${item.image.includes('/Immo-4/') ? 'brightness-110 contrast-105 saturate-125' : ''} ${isHovered ? 'scale-105 opacity-0' : ''} ${priceHovered ? 'scale-[1.35] rounded-xl shadow-2xl' : ''}`}
      />
      {item.watermark && !isHovered && (
        <Image
          src="/images/Logo/Logo1.png"
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          aria-hidden="true"
          className="pointer-events-none object-contain opacity-25"
        />
      )}
      {hoverImages.length > 0 && (
        <Image
          src={hoverImages[hoverImageIndex]}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          aria-hidden="true"
          className={`object-cover transition-all duration-500 ${isHovered ? 'scale-105 opacity-100' : 'opacity-0'} ${priceHovered ? 'scale-[1.35] rounded-xl shadow-2xl' : ''}`}
        />
      )}
      <span
        className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
      >
        {item.status}
      </span>
      {(item.hoverImages || item.image.includes('/Immo-3/')) && (
        <span className="absolute inset-x-0 bottom-0 truncate bg-black/55 px-3 py-1 text-[10px] text-white">
          {visibleFileName}
        </span>
      )}
    </div>
  )
}

export function Listings() {
  const [hoveredPriceIndex, setHoveredPriceIndex] = useState<number | null>(null)

  return (
    <section id="angebote" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Aktuelle Angebote
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Immobilien zum Verkauf
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Eine Auswahl unserer aktuell verfügbaren Objekte im Saarland. Sprechen
            Sie uns für ein persönliches Exposé oder einen Besichtigungstermin an.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item, index) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-visible rounded-xl border border-border bg-card shadow-sm transition-all hover:z-30 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <ListingImage
                item={item}
                priceHovered={hoveredPriceIndex === index}
              />

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-accent" />
                  {item.location}
                </div>
                <div className="group/title relative">
                  <h3
                    tabIndex={item.description ? 0 : undefined}
                    className="mt-1 cursor-help font-serif text-lg font-semibold text-foreground outline-none"
                  >
                    {item.title}
                  </h3>
                  {item.description && (
                    <div className="pointer-events-none absolute bottom-full left-0 z-20 mb-3 w-[min(32rem,calc(100vw-3rem))] translate-y-2 rounded-lg border border-border bg-card p-4 text-left text-sm leading-relaxed text-card-foreground opacity-0 shadow-lg transition-all duration-200 group-hover/title:pointer-events-auto group-hover/title:translate-y-0 group-hover/title:opacity-100 group-focus-within/title:pointer-events-auto group-focus-within/title:translate-y-0 group-focus-within/title:opacity-100">
                      {item.description}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {item.rooms && (
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble className="size-4" />
                      {item.rooms}
                    </span>
                  )}
                  {item.baths && (
                    <span className="inline-flex items-center gap-1.5">
                      <Bath className="size-4" />
                      {item.baths}
                    </span>
                  )}
                  {item.livingArea && (
                    <span className="inline-flex items-center gap-1.5">
                      <Home className="size-4" />
                      Wohnfläche: {item.livingArea}
                    </span>
                  )}
                  {item.units && (
                    <span className="inline-flex items-center gap-1.5">
                      <Building2 className="size-4" />
                      {item.units}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1.5">
                    <Maximize className="size-4" />
                    {item.area}
                  </span>
                </div>

                <div
                  className="mt-5 flex items-end justify-between border-t border-border/70 pt-4"
                  onMouseEnter={() => setHoveredPriceIndex(index)}
                  onMouseLeave={() => setHoveredPriceIndex(null)}
                >
                  <div>
                    <p className="text-xs text-muted-foreground">Kaufpreis</p>
                    <p className="font-serif text-xl font-semibold text-primary">
                      {item.price}
                    </p>
                  </div>
                  <Button
                    render={<a href="#kontakt" />}
                    nativeButton={false}
                    variant="outline"
                    size="sm"
                  >
                    Anfragen
                    <ArrowUpRight className="size-4" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Alle Angaben ohne Gewähr. Weitere Objekte auf Anfrage – wir finden auch
          die passende Immobilie für Ihre Wünsche.
        </p>
      </div>
    </section>
  )
}
