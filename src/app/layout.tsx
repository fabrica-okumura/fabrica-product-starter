import "./globals.css";

export const metadata = {
  title: "Fabrica Product",
  description: "Starter project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
