'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { messages, siteConfig, whatsappLink } from '@/lib/site-config'
import { CtaLink } from './cta-link'

const navItems = [
  { href: '#coleccion', label: 'Colección' },
  { href: '#mini-totes', label: 'Mini Totes' },
  { href: '#personaliza', label: 'Personaliza' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        <a
          href="#inicio"
          className="flex items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Image
            src={siteConfig.images.logo || '/placeholder.svg'}
            alt={siteConfig.brandName}
            width={96}
            height={96}
            priority
            className="size-[4.5rem] scale-125 object-contain mix-blend-multiply"
          />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm tracking-wide text-foreground/80 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <CtaLink href={whatsappLink(messages.general)} external className="h-11 px-6">
            Haz tu pedido
          </CtaLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex size-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Móvil" className="border-t border-border/60 bg-background md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-2xl text-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <CtaLink href={whatsappLink(messages.general)} external className="w-full">
                Haz tu pedido
              </CtaLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
