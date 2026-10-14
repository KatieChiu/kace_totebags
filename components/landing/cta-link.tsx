import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'light'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_-12px_var(--primary)]',
  outline: 'border border-primary/30 text-primary hover:border-primary hover:bg-primary/5',
  light: 'bg-background text-primary hover:bg-secondary',
}

export function CtaLink({
  href,
  children,
  variant = 'primary',
  external = false,
  className,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  external?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  )
}
