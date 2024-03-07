import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pokedex",
  description: "A pokedex made with next.JS"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any"/>
      </head>
      <body className="bg-stone-200 text-black">
        {children}
      </body>
    </html>
  )
}
