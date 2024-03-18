"use client";
import { PokemonGeneration } from "../interfaces/interfacesAPI";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

export default function Generations(props: Readonly<PokemonGeneration>){
    return(
        <Dialog.Root>
            <Dialog.Trigger 
                className="flex flex-1 flex-col gap-y-0.5 border-solid border-red-400 border-2 justify-center content-center items-center text-center rounded-md h-44 w-28 md:w-52 md:h-56 hover:border-amber-400">

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
            </Dialog.Trigger>


            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50"/>

                <Dialog.Content className="fixed inset-0 xl:top-1/2 md:left-1/2 md:-translate-x-1/2 xl:-translate-y-1/2 flex flex-col w-full xl:max-w-[640px] xl:h-[85vh] bg-red-400 border-solid xl:rounded-md text-black md:overflow-y-scroll  xl:overflow-auto gap-y-10">

                    <Dialog.Close className="absolute top-2 right-1 md:top-6 md:right-6 xl:top-5 xl:right-5">
                        <X/>
                    </Dialog.Close>

                    <div className="flex flex-col text-center justify-center content-center">
                        <span className="text-center font-thin md:font-semibold">
                            Moves:
                        </span>
                        <div className="flex flex-col flex-wrap max-h-80 gap-x-2 gap-y-1">
                            {props.moves.map((move) => (
                                <p key={move.id} className="text-center font-thin">
                                    {move.name}
                                </p>
                            ))}
                        </div>

                        <span className="text-center font-thin md:font-semibold">
                            Version groups:
                        </span>
                        <div className="flex flex-col flex-wrap h-80 gap-x-2 gap-y-1">
                            {props.version_groups.map((group) => (
                                <p key={group.id} className="text-center font-thin">
                                    {group.name}
                                </p>
                            ))}
                        </div>

                        <span className="">
                            Pokemons:
                        </span>
                        <div className="flex flex-col flex-wrap h-80 gap-x-2 gap-y-1">
                            {props.pokemon_species.map((pokemon) => (
                                <p key={pokemon.id} className="text-center font-thin">
                                    {pokemon.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}