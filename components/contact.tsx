'use client'

import { MapPin, Mail, Phone } from 'lucide-react'
import type { FormEvent } from 'react'
import { useState } from 'react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const formData = new FormData(event.currentTarget)
    const fields = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      })

      if (!response.ok) throw new Error('Die Anfrage konnte nicht gesendet werden.')

      event.currentTarget.reset()
      setSubmitMessage('Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.')
    } catch {
      setSubmitMessage('Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="bg-concrete border-t border-border/70">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Kontakt
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground md:text-4xl">
              Sprechen wir über Ihre Immobilie
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Sie haben Fragen zu Kauf, Verkauf, Vermietung oder Verwaltung? Wir
              beraten Sie gerne unverbindlich und persönlich.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              <a
                href="https://maps.google.com/?q=Am+Wald+6+66763+Dillingen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    Adresse
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    Am Wald 6, 66763 Dillingen
                  </span>
                </span>
              </a>

              <a href="tel:+4915253848020" className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    Telefon
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    +49 (0)152 53848020
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <span>
                  <span className="block font-medium text-foreground">
                    E-Mail
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    info@ex-lux-immo.de
                  </span>
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  E-Mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="topic" className="text-sm font-medium">
                Anliegen
              </label>
              <select
                id="topic"
                name="topic"
                className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
              >
                <option>Maklerdienst</option>
                <option>Verwaltung</option>
                <option>Kauf & Verkauf</option>
                <option>Vermietung & Verpachtung</option>
              </select>
            </div>

            <div className="mt-4 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="resize-none rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
              />
            </div>

            <button
              type="submit"
              className="mt-5 w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Wird gesendet ...' : 'Nachricht senden'}
            </button>
            {submitMessage && (
              <p className="mt-3 text-sm text-muted-foreground" role="status">
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
