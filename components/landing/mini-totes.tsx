import Image from 'next/image'
import { messages, siteConfig, whatsappLink } from '@/lib/site-config'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const uses = ['Regalos corporativos', 'Eventos', 'Detalles para clientes', 'Recuerdos', 'Pequeños obsequios']

export function MiniTotes() {
  return (
    <section id="mini-totes" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="relative lg:col-span-7">
          <div className="overflow-hidden rounded-3xl bg-secondary">
            <Image
              src={siteConfig.images.miniTotes || '/placeholder.svg'}
              alt="Mini totes de manta y jean junto a una caja de regalo y una taza, mostrando su tamaño reducido"
              width={1024}
              height={1024}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="aspect-square w-full object-cover md:aspect-[5/4]"
            />
          </div>
          <dl className="absolute -bottom-6 right-6 flex gap-6 rounded-2xl bg-primary px-6 py-4 text-primary-foreground md:right-10">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] opacity-80">Alto</dt>
              <dd className="font-serif text-3xl">20 cm</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] opacity-80">Ancho</dt>
              <dd className="font-serif text-3xl">15 cm</dd>
            </div>
          </dl>
        </Reveal>

        <div className="flex flex-col gap-8 pt-6 lg:col-span-5 lg:pt-0">
          <SectionHeading
            align="left"
            eyebrow="Mini Totes"
            title="Pequeños detalles, grandes recuerdos"
            subtitle="Mini totes personalizadas para regalar, sorprender y representar tu marca."
          />
          <Reveal delay={150} className="flex flex-col gap-4">
            <p className="leading-relaxed text-muted-foreground">
              La versión mini de nuestras totes, en manta natural y jean, con asas proporcionadas y un frente
              limpio para tu logotipo, un nombre o un mensaje.
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Ideas de uso">
              {uses.map((use) => (
                <li key={use} className="rounded-full border border-primary/20 px-4 py-2 text-sm text-foreground">
                  {use}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={250}>
            <CtaLink href={whatsappLink(messages.mini)} external>
              Cotizar mini totes
            </CtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
