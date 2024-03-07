"use client"
import 'tailwindcss/tailwind.css';

export default function Footer(){
    return (
        <div className="flex flex-row content-center items-center justify-center gap-x-1 bg-red-400 h-40">
            <ul className="flex flex-col content-center justify-center flex-wrap items-baseline gap-y-0.5 w-40">
                <h4 className="font-semibold">
                    Minhas redes:
                </h4>
                
                <li className="pl-1">
                    <a href="https://github.com/joaovictor1516"
                       className="flex flex-row justify-center gap-0.5">
                        <img src="/assets/githubLogo.png"
                            alt="Imagem de uma silhueta branca de de um gato em um fundo preto arredondado"
                            className="w-6 h-6"/>
                        <p className="font-extralight hover:decoration-solid hover:underline">
                            Meu github
                        </p>
                    </a>
                </li>

                <li className="pl-1">
                    <a href="https://www.linkedin.com/in/joao-victor-campos-souza-oliveira/"
                        className="flex flex-row justify-center gap-0.5">
                        <img src="/assets/linkedinLogo.png"
                            alt="As litras in na cor branca em um fundo azul quadrado com as bordas arredondadas"
                            className="w-6 h-6"/>
                        <p className="font-extralight hover:decoration-solid hover:underline">
                            Meu linkedin
                        </p>
                    </a>
                </li>

                <li className="pl-1">
                    <a href="https://www.hackerrank.com/profile/voliveira_joao30"
                        className="flex flex-row justify-center gap-0.5">
                        <img src="/assets/hackerrankLogo.png"
                            alt="As litras in na cor branca em um fundo azul quadrado com as bordas arredondadas"
                            className="w-6 h-6"/>
                        <p className="font-extralight hover:decoration-solid hover:underline">
                            Meu hackerRank
                        </p>
                    </a>
                </li>
            </ul>
            
            <ul className="flex flex-col content-center justify-center flex-wrap items-baseline gap-y-0.5 w-40">
                <h4 className="font-semibold">
                    Tecnologias usadas:
                </h4>

                <li className="flex flex-row justify-center gap-0.5 pl-1">
                    <img src="/assets/nextjsLogo.png" 
                        alt="A letra 'n' escrita em maiusculo no fundo arredondado preto"
                        className="w-6 h-6"/>
                    <p className="font-extralight">
                        Next.JS
                    </p>
                </li>
                
                <li className="flex flex-row justify-center gap-0.5 pl-1">
                    <img src="/assets/pokeapiLogo.png" 
                        alt="Pokeapi escrito em maiusculo na cor as lentras na cor amarela e com as bardas em azul"
                        className="w-10 h-6"/>
                    <p className="font-extralight">
                        PokeAPI
                    </p>
                </li>
                
                <li className="flex flex-row justify-center gap-0.5 pl-1">
                    <img src="/assets/tailwindLogo.png" 
                        alt="Logo do tailwind.css"
                        className="w-6 h-6"/>
                    <p className="font-extralight">
                        Tailwind.CSS
                    </p>
                </li>

                <li className="flex flex-row justify-center gap-0.5 pl-1">
                    <img src="/assets/typescriptLogo.png" 
                        alt="As letras 't' e 's' em  maiusculo na cor branca localuizadas no canto inferior esquerdo de um quadrado em azul"
                        className="w-6 h-6"/>
                    <p className="font-extralight">
                        TypeScript
                    </p>
                </li>
            </ul>
        </div>
    )
}