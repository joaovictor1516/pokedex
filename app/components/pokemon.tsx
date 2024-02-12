"use client";
interface PokemonName{
    id: number,
    name: string,
}

export default function Principal(props: Readonly<PokemonName>){
    return(
        <div>
            <span>{props.name}</span>
            <p>{props.id}</p>
        </div>
    )
}