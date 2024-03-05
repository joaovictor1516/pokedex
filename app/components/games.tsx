"use client";
import "tailwindcss/tailwind.css";
import { PokemonList } from "../interfaces/interfacesAPI";

export default function Games(props: Readonly<PokemonList>){
    return(
        <div className="">
            <h3 className="">
                {props.name}
            </h3>
        </div>
    )
}