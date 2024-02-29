"use client"

export default function Footer(){
    return (
        <div className="flex flex-row justify-center al bg-red-400">
            <ul className="flex flex-col w-40">
                <h4 className="">
                    Minhas redes:
                </h4>
                <li className="flex flex-row justify-center">
                    <a href="https://github.com/joaovictor1516">
                        <img src="/assets/githubLogo.png"
                            alt="Imagem de uma silhueta branca de de um gato em um fundo preto arredondado"
                            className="w-8 h-8"/>
                        Meu github
                    </a>
                </li>
                <li className="flex flex-row justify-center">
                    <a href="https://www.linkedin.com/in/joao-victor-campos-souza-oliveira/">
                        <img src="/assets/linkedinLogo.png"
                            alt="As litras in na cor branca em um fundo azul quadrado com as bordas arredondadas"
                            className="w-8 h-8"/>
                        Meu linkedin
                    </a>
                </li>
            </ul>
            
            <ul className="flex flex-col w-40">
                <h4>
                    Texnologias usadas
                </h4>

                <li className="flex flex-row justify-center">
                    <p>Next.JS</p>
                </li>
                <li className="flex flex-row justify-center">
                    <p>PokeAPI</p>
                </li>
                <li className="flex flex-row justify-center">
                    <p></p>
                </li>
            </ul>
        </div>
    )
}