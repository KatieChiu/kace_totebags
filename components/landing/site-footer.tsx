import Image from 'next/image'
import { FacebookLink, instagramLink, messages, siteConfig, whatsappLink } from '@/lib/site-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-14 text-center md:flex-row md:justify-between md:text-left md:px-10">
        <div className="flex items-center gap-4">
          <Image
            src={siteConfig.images.logo || '/placeholder.svg'}
            alt=""
            width={64}
            height={64}
            className="size-14 object-contain mix-blend-multiply"
          />
          <div className="flex flex-col">
            <span className="font-serif text-2xl text-foreground">{siteConfig.brandName}</span>
            <span className="text-sm text-muted-foreground">Diseñado para llevar tu esencia contigo.</span>
          </div>
        </div>
        <nav aria-label="Redes">
          <ul className="flex items-center gap-8 text-sm">
             <li>
              <a
                href={FacebookLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={instagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
