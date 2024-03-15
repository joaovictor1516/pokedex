"use client";
import { PokemonGeneration } from "../interfaces/interfacesAPI";

export default function Generations(props: Readonly<PokemonGeneration>){
    return(
        <div className="">
            <h3 className="">
                {props.name}
            </h3>
        </div>
    )
}