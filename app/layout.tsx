export const metadata = {
  title: 'pokedex',
  description: 'A pokedex made with next.JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
