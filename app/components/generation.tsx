"use client";
import { PokemonGeneration } from "../interfaces/interfacesAPI";

export default function Generations(props: Readonly<PokemonGeneration>){
    return(
        <div className="flex flex-1 flex-col justify-center content-center">
            <h1 className="text-center font-semibold md:font-bold">
                {props.name}
            </h1>

            <span className="text-center font-thin md:font-semibold">
                Types:
            </span>

            {props.types !== undefined && props.types.length > 0 ? (
                <div className="">
                    {props.types.map((type, id) => (
                        <p className="" 
                            key={id}>
                                {type.name[0].toUpperCase().concat(type.name.slice(1))}
                        </p>
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