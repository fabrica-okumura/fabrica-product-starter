import Link from "next/link"
import * as React from "react"

export function PageHeader() {
  return (
    <header className="sticky top-0 z-40 h-[8rem] bg-white">
      <Link href="/">ロゴ</Link>
    </header>
  )
}

