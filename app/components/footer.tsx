"use client"
import 'tailwindcss/tailwind.css';

export default function Footer(){
    return (
        <div className="flex flex-row justify-center al bg-red-400">
            <ul className="flex flex-col content-center flex-wrap w-40">
                <h4 className="">
                    Minhas redes:
                </h4>
                <li className="">
                    <a href="https://github.com/joaovictor1516"
                       className="flex flex-row justify-center gap-0.5">
                        <img src="/assets/githubLogo.png"
                            alt="Imagem de uma silhueta branca de de um gato em um fundo preto arredondado"
                            className="w-6 h-6"/>
                        <p className="">
                            Meu github
                        </p>
                    </a>
                </li>
                <li className="">
                    <a href="https://www.linkedin.com/in/joao-victor-campos-souza-oliveira/"
                        className="flex flex-row justify-center gap-0.5">
                        <img src="/assets/linkedinLogo.png"
                            alt="As litras in na cor branca em um fundo azul quadrado com as bordas arredondadas"
                            className="w-6 h-6"/>
                        <p className="">
                            Meu linkedin
                        </p>
                    </a>
                </li>
            </ul>
            
            <ul className="flex flex-col content-center flex-wrap w-40">
                <h4>
                    Tecnologias usadas:
                </h4>

                <li className="flex flex-row justify-center gap-0.5">
                    <img src="/assets/nextjsLogo.png" 
                        alt="A letra 'n' escrita em maiusculo no fundo arredondado preto"
                        className="w-6 h-6"/>
                    <p className="">
                        Next.JS
                    </p>
                </li>
                <li className="flex flex-row justify-center gap-0.5">
                    <img src="/assets/pokeapiLogo.png" 
                        alt="Pokeapi escrito em maiusculo na cor as lentras na cor amarela e com as bardas em azul"
                        className="w-10 h-6"/>
                    <p className="">
                        PokeAPI
                    </p>
                </li>
                <li className="flex flex-row justify-center gap-0.5">
                    <img src="/assets/tailwindLogo.png" 
                        alt="Logo do tailwind.css"
                        className="w-6 h-6"/>
                    <p className="">
                        Tailwind.CSS
                    </p>
                </li>

                <li className="flex flex-row justify-center gap-0.5">
                    <img src="/assets/typescriptLogo.png" 
                        alt="As letras 't' e 's' em  maiusculo na cor branca localuizadas no canto inferior esquerdo de um quadrado em azul"
                        className="w-6 h-6"/>
                    <p className="">
                        TypeScript
                    </p>
                </li>
            </ul>
        </div>
    )
}