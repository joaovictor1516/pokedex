"use client";
import "tailwindcss/tailwind.css";
import { PokemonList } from "../interfaces/interfacesAPI";

export default function Games(props: PokemonList){
    return(
        <p>{props.name}</p>
    )
}