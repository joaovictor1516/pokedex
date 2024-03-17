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
                <div className="text-center font-thin">
                    {props.types.map((type) => (
                        <p className="text-center font-thin" 
                            key={type.id}>
                                {type.name[0].toUpperCase().concat(type.name.slice(1))}
                        </p>
                    ))}
            </div>
            ) : (
            <div>
                <p className="text-center font-thin">
                    Without new types
                </p>
            </div>
            )}

            <span className="text-center font-thin md:font-semibold">
                Moves:
            </span>

            <div className="">
                {props.moves.map((move) => (
                    <p key={move.id} className="text-center font-thin">
                        {move.name}
                    </p>
                ))}
            </div>

            <span className="text-center font-thin md:font-semibold">
                Version groups:
            </span>

            <div className="">
                {props.version_groups.map((group) => (
                    <p key={group.id} className="text-center font-thin">
                        {group.name}
                    </p>
                ))}
            </div>
        </div>
    )
}