"use client"
import 'tailwindcss/tailwind.css';
import Image from 'next/image';

export default function Footer(){
    return (
        <div className="flex flex-row relative right-0 left-0 bottom-0 content-center items-start justify-center gap-x-1 bg-red-400 h-36 pt-3">
            <ul className="flex flex-col content-center justify-center flex-wrap items-baseline gap-y-0.5 w-40">
                <h4 className="font-semibold">
                    Minhas redes:
                </h4>
                
                <li className="pl-1">
                    <a href="https://github.com/joaovictor1516"
                       className="flex flex-row justify-center gap-0.5">
                        <Image src="/assets/githubLogo.png"
                            width={24}
                            height={24}
                            alt="Imagem de uma silhueta branca de de um gato em um fundo preto arredondado"/>
                        <p className="font-extralight hover:decoration-solid hover:underline">
                            Meu github
                        </p>
                    </a>
                </li>

                <li className="pl-1">
                    <a href="https://www.linkedin.com/in/joao-victor-campos-souza-oliveira/"
                        className="flex flex-row justify-center gap-0.5">
                        <Image src="/assets/linkedinLogo.png"
                            width={24}
                            height={24}
                            alt="As litras in na cor branca em um fundo azul quadrado com as bordas arredondadas"/>
                        <p className="font-extralight hover:decoration-solid hover:underline">
                            Meu linkedin
                        </p>
                    </a>
                </li>

                <li className="pl-1">
                    <a href="https://www.hackerrank.com/profile/voliveira_joao30"
                        className="flex flex-row justify-center gap-0.5">
                        <Image src="/assets/hackerrankLogo.png"
                            width={24}
                            height={24}
                            alt="As litras in na cor branca em um fundo azul quadrado com as bordas arredondadas"/>
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
                    <Image src="/assets/nextjsLogo.png"
                        width={24}
                        height={24}
                        alt="A letra 'n' escrita em maiusculo no fundo arredondado preto"/>
                    <p className="font-extralight">
                        Next.JS
                    </p>
                </li>
                
                <li className="flex flex-row justify-center gap-0.5 pl-1">
                    <Image src="/assets/pokeapiLogo.png"
                        width={40}
                        height={24}
                        alt="Pokeapi escrito em maiusculo na cor as lentras na cor amarela e com as bardas em azul"/>
                    <p className="font-extralight">
                        PokeAPI
                    </p>
                </li>
                
                <li className="flex flex-row justify-center gap-0.5 pl-1">
                    <Image src="/assets/tailwindLogo.png"
                        width={24}
                        height={24} 
                        alt="Logo do tailwind.css"/>
                    <p className="font-extralight">
                        Tailwind.CSS
                    </p>
                </li>

                <li className="flex flex-row justify-center gap-0.5 pl-1">
                    <Image src="/assets/typescriptLogo.png"
                        width={24}
                        height={24}
                        alt="As letras 't' e 's' em  maiusculo na cor branca localuizadas no canto inferior esquerdo de um quadrado em azul"/>
                    <p className="font-extralight">
                        TypeScript
                    </p>
                </li>
            </ul>
        </div>
    )
}