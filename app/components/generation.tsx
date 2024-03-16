"use client";
import { PokemonGeneration } from "../interfaces/interfacesAPI";

export default function Generations(props: Readonly<PokemonGeneration>){
    return(
        <div className="">
            <h1 className="">
                {props.name}
            </h1>

            <span className="">
                Types:
            </span>

            {props.types !== undefined && props.types.length > 0 ? (
                <div className="">
                    {props.types.map((type, id) => (
                        <span className="" 
                            key={id}>
                                {type.name[0].toUpperCase().concat(type.name.slice(1))}
                        </span>
                    ))}
            </div>
            ) : (
            <div>
                <span className="">
                    Without new types
                </span>
            </div>
            )}
        </div>
    )
}