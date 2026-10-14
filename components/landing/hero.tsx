import Image from 'next/image'
import { messages, siteConfig, whatsappLink } from '@/lib/site-config'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'
import { Sparkle } from './sparkle'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-16">
        <div className="flex flex-col gap-8 lg:col-span-5">
          <Reveal>
            <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <Sparkle className="size-3 text-accent" />
              Tote bags personalizadas
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-serif text-6xl font-medium leading-[0.95] text-balance text-foreground md:text-7xl xl:text-8xl">
              Lleva tus ideas <em className="metallic-text font-normal">contigo.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-sm text-lg leading-relaxed text-pretty text-muted-foreground">
              Tote bags personalizadas, hechas para acompañar tu estilo.
            </p>
          </Reveal>
          <Reveal delay={300} className="flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#coleccion">Explorar colección</CtaLink>
            <CtaLink href={whatsappLink(messages.general)} external variant="outline">
              Personaliza la tuya
            </CtaLink>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative lg:col-span-7">
          <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-3xl bg-secondary md:rounded-t-[20rem]">
            <Image
              src={siteConfig.images.hero || '/placeholder.svg'}
              alt="Tote bag de manta natural y tote bag de jean, vista en tres cuartos"
              width={1408}
              height={768}
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="aspect-[4/3] w-full object-cover md:aspect-[16/11]"
            />
          </div>
          <Sparkle className="absolute -top-3 right-10 size-8 text-primary md:size-10" />
          <Sparkle className="absolute right-4 top-12 size-4 text-accent" />
          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-full bg-background px-5 py-3 text-sm shadow-[0_12px_32px_-16px_var(--primary)]">
            <span className="font-serif text-lg italic text-primary">Manta</span>
            <Sparkle className="size-2.5 text-accent" />
            <span className="font-serif text-lg italic text-primary">Jean</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
