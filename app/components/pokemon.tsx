"use client";
import 'tailwindcss/tailwind.css'
interface PokemonName{
    name: string;
    ability: {
        name: string,
        url: string
    };
}

export default function Principal(props: Readonly<PokemonName>){
    return(
        <div className="flex  border-solid border-red-600 border-2 text-center">
            <span>{props.name}</span>
        </div>
    )
}