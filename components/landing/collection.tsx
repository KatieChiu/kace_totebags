
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { messages, siteConfig, whatsappLink } from '@/lib/site-config'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const products = [
  {
    name: 'Tote de manta',
    image: siteConfig.images.toteManta,
    alt: 'Tote bag de manta natural color crema con ilustración floral estampada',
    description:
      'Algodón natural con textura suave y ligeramente irregular, costuras cuidadas y asas largas del mismo material.',
    message: messages.manta,
  },
  {
    name: 'Tote de jean',
    image: siteConfig.images.toteJean,
    alt: 'Tote bag de mezclilla azul con costuras reforzadas y nombre estampado',
    description:
      'Denim azul con costuras reforzadas, asas de jean y un acabado artesanal y moderno que mejora con el uso.',
    message: messages.jean,
  },
]

export function Collection() {
  return (
    <section id="coleccion" className="bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-5 md:px-10">
        <SectionHeading
          eyebrow="Colección"
          title="Tu estilo, en cada detalle"
          subtitle="Dos texturas, infinitas posibilidades."
        />

        <div className="grid gap-10 md:grid-cols-2 md:gap-8">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={i * 150}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-background transition-shadow duration-500 hover:shadow-[0_30px_60px_-30px_var(--primary)]">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.alt}
                    width={1024}
                    height={1024}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-background/90 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary backdrop-blur">
                    Personalizable
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-7 md:p-9">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-4xl font-medium text-foreground">
                      {product.name}
                    </h3>

                    <p className="shrink-0 text-sm tabular-nums text-muted-foreground">
                      <span className="sr-only">Medidas: </span>
                      42 × 36 cm
                    </p>
                  </div>

                  <p className="leading-relaxed text-pretty text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-2">
                    <CtaLink
                      href={whatsappLink(product.message)}
                      external
                      variant="outline"
                    >
                      Personalizar esta tote
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </CtaLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Acceso al catálogo completo */}
        <Reveal delay={300}>
          <div className="mx-auto w-full max-w-2xl rounded-3xl border border-border bg-background p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg md:p-10">
            <h3 className="font-serif text-3xl font-medium text-foreground">
              Descubre más diseños
            </h3>

            <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
             ¿Prefieres un diseño ya creado? 
             Explora nuestra colección exclusiva de totes listas para elegir tu favorita.
            </p>

            <div className="mt-7 flex justify-center">
              <CtaLink
                href="https://sites.google.com/view/kacetotes"
                external
                variant="outline"
              >
                Ver catálogo completo
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
