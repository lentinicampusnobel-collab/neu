'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Start', href: '/#start' },
  { label: 'Leistungen', href: '/#leistungen' },
  { label: 'Angebote', href: '/#angebote' },
  { label: 'Über uns', href: '/#ueber-uns' },
  { label: 'Kontakt', href: '/#kontakt' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="/#start" className="flex items-center gap-3">
          <Image
            src="/images/Logo/Logo1.png"
            alt="Ex-Lux-Immo GmbH Logo"
            width={48}
            height={48}
            className="h-11 w-11 object-contain mix-blend-multiply"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-primary">
              Ex-Lux-Immo
            </span>
            <span className="text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
              GmbH
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button render={<a href="/#kontakt" />} nativeButton={false}>
            <Phone className="size-4" />
            Kontakt aufnehmen
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/70 bg-background/95 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm font-medium text-foreground/80 last:border-0"
              >
                {item.label}
              </a>
            ))}
            <Button
              render={<a href="/#kontakt" onClick={() => setOpen(false)} />}
              nativeButton={false}
              className="my-3"
            >
              <Phone className="size-4" />
              Kontakt aufnehmen
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
