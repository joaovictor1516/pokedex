"use client";
import { PokemonItems } from "../interfaces/interfacesAPI";
import Image from "next/image";

export default function Items(props: Readonly<PokemonItems>){
    return(
        <div className="flex items-center flex-col border-red-400 border-2 hover:border-amber-400 p-2">
            <Image src={props.sprites.default} 
                width={10}
                height={10}  
                alt={`Image of the item ${props.name}`} 
                className=""/>

            <h3 className="font-normal md:font-bold">
                {props.name[0].toUpperCase().concat(props.name.slice(1))}
            </h3>
        </div>
    )
}