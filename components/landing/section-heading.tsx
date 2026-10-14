import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { Sparkle } from './sparkle'

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
}) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
      )}
    >
      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <Sparkle className="size-3 text-accent" />
        {eyebrow}
      </p>
      <h2 className="max-w-2xl font-serif text-5xl font-medium leading-[1.02] text-balance text-foreground md:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">{subtitle}</p>
      )}
    </Reveal>
  )
}
