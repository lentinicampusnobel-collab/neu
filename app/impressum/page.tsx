import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Impressum | Ex-Lux-Immo GmbH',
  description: 'Impressum der Ex-Lux-Immo GmbH.',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
        <Link href="/" className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
          Zurück zur Startseite
        </Link>
        <header className="mt-8 border-b border-border pb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Rechtliche Hinweise</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold tracking-tight text-foreground md:text-6xl">Impressum</h1>
        </header>
        <div className="mt-10 max-w-2xl space-y-8 text-foreground/85 [&_h2]:font-serif [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:leading-8">
          <section>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Ex-Lux-Immo GmbH
              <br />
              Am Wald 6
              <br />
              66763 Dillingen Saar
            </p>
          </section>
          <section>
            <h2>Kontakt</h2>
            <p>
              Telefon: <a className="text-primary underline-offset-4 hover:underline" href="tel:+496831165190">+49 (0) 6831 165190</a>
              <br />
              E-Mail: <a className="text-primary underline-offset-4 hover:underline" href="mailto:info@ex-lux-immo.de">info@ex-lux-immo.de</a>
            </p>
          </section>
        </div>
      </article>
      <SiteFooter />
    </main>
  )
}