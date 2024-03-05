"use client";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: 'pokedex',
  description: 'A pokedex made with next.JS',
}

export default function RootLayout({
  children,
  searchFunction
}: Readonly<{
  children: React.ReactNode;
  searchFunction: (content: string) => void;
}>) {

  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className="bg-stone-200 text-black">
            <Header searchFunction={searchFunction}/>
              <main>
                {children}
              </main>
              <Footer/>
      </body>
    </html>
  )
}
