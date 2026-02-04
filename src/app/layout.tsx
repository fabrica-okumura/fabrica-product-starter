import type { Metadata } from 'next'
import Link from 'next/link'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

import { PageHeader } from '@/components/shared/page-header'
import { PageTopButton } from '@/components/shared/page-top-button'
import { Toaster } from '../components/ui/sonner'

export const metadata: Metadata = {
  title: 'サイトタイトル',
  description: '説明文です。',
}

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const navItems = [
    { href: '/getting-started', label: 'Getting Started' },
    { href: '/foundations', label: 'Foundations' },
    { href: '/components', label: 'Components' },
  ]

  return (
    <html lang="ja">
      <body className={`font-sans ${notoSansJP.variable}`}>
        <PageHeader />
        <div className="flex min-h-screen bg-(--usage-background)">
          <aside className="w-64 shrink-0 border-r border-(--usage-border) bg-white px-4 py-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-wide text-(--primitive-neutral-600)">
              Docs
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-md px-2 py-1 text-sm font-medium text-(--body-text) hover:bg-(--usage-background)"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </aside>
          <div className="flex-1">{children}</div>
        </div>
        <PageTopButton />
        <Toaster />
      </body>
    </html>
  )
}
