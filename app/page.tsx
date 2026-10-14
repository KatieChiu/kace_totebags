import { Collection } from '@/components/landing/collection'
import { Hero } from '@/components/landing/hero'
import { MiniTotes } from '@/components/landing/mini-totes'
import { Personalize } from '@/components/landing/personalize'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Collection />
        <MiniTotes />
        <Personalize />
      </main>
      <SiteFooter />
    </>
  )
}
