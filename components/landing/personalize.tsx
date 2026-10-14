import Image from 'next/image'
import { messages, siteConfig, whatsappLink } from '@/lib/site-config'
import { CtaLink } from './cta-link'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const options = ['Nombres', 'Frases', 'Ilustraciones', 'Diseños minimalistas', 'Logotipos corporativos']

const steps = [
  { title: 'Elige tu tela', text: 'Manta natural o jean.' },
  { title: 'Cuéntanos tu idea', text: 'Un nombre, una frase, un dibujo o tu logo.' },
  { title: 'Recibe tu tote', text: 'Personalizada y lista para acompañarte.' },
]

export function Personalize() {
  return (
    <section id="personaliza" className="bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-5 md:px-10">
        <SectionHeading eyebrow="Personaliza" title="Hazla tan tuya como quieras" />

        <Reveal>
          <figure className="flex flex-col gap-5">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src={siteConfig.images.personaliza || '/placeholder.svg'}
                alt="Cuatro tote bags colgadas con distintas personalizaciones: un nombre, una frase, una ilustración y un logotipo"
                width={1408}
                height={768}
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="aspect-[4/3] w-full object-cover md:aspect-[16/8]"
              />
            </div>
            <figcaption>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {options.map((o) => (
                  <li key={o} className="font-serif text-xl italic text-primary">
                    {o}
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </Reveal>

        <ol className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="bg-background">
              <Reveal delay={i * 120} className="flex h-full flex-col gap-3 p-8 md:p-10">
                <span className="font-serif text-5xl italic text-accent" aria-hidden="true">
                  {i + 1}
                </span>
                <h3 className="font-serif text-3xl font-medium text-foreground">{step.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="flex justify-center">
          <CtaLink href={whatsappLink(messages.pedido)} external className="h-14 px-10 text-base">
            Crear mi pedido
          </CtaLink>
        </Reveal>
      </div>
    </section>
  )
}
