import type { Metadata } from "next";
import { notoSansJP } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "サイトタイトル（Bリポ）",
  description: "説明文です。",
};

/**
 * 配布用ルートレイアウト（B リポに同期する最小構成）。
 * A リポの docs 専用レイアウトは src/app/layout.tsx。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans ${notoSansJP.variable}`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
