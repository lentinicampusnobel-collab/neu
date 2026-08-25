import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Listings } from '@/components/listings'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="min-h-dvh">
      <SiteHeader />
      <Hero />
      <Services />
      <Listings />
      <About />
      <Contact />
      <SiteFooter />
    </main>
  )
}
