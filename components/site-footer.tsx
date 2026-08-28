import { MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold">Ex-Lux-Immo GmbH</p>
            <p className="text-sm text-primary-foreground/70">
              Immobilien mit Wert
            </p>
          </div>

          <div className="flex items-start gap-3 text-sm text-primary-foreground/85">
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <address className="not-italic leading-relaxed">
              Am Wald 6<br />
              66763 Dillingen
            </address>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/85">
            <a href="/#leistungen" className="hover:text-primary-foreground">
              Leistungen
            </a>
            <a href="/#ueber-uns" className="hover:text-primary-foreground">
              Über uns
            </a>
            <a href="/#kontakt" className="hover:text-primary-foreground">
              Kontakt
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-primary-foreground/20 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Ex-Lux-Immo GmbH. Alle Rechte
            vorbehalten.
          </p>
          <p className="flex gap-4">
            <a href="/impressum" className="hover:text-primary-foreground">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-primary-foreground">
              Datenschutz
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
