'use client'

import Link from 'next/link'
import { Icon } from '../ui/icon'
import { cn } from '../../lib/utils'

export function PageTopButton({ className }: { className?: string }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Link
      href="#"
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      aria-label="ページトップへ戻る"
    >
      <Icon name="arrow-up" size={24} aria-hidden="true" />
    </Link>
  )
}

