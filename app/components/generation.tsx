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

                <span className="text-center font-normal md:font-semibold">
                    Main region:
                </span>
                
                <p className="text-center font-thin">
                    {props.main_region.name[0].toUpperCase().concat(props.main_region.name.slice(2))}
                </p>              
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className="inset-0 fixed bg-black/50"/>

                <Dialog.Content className="fixed inset-0 xl:top-1/2 md:left-1/2 md:-translate-x-1/2 xl:-translate-y-1/2 flex flex-col w-full xl:max-w-[640px] xl:h-[85vh] bg-red-400 border-solid xl:rounded-md text-black overflow-scroll  xl:overflow-auto gap-y-10">

                    <Dialog.Close className="absolute top-1 right-8 md:top-6 md:right-6 xl:top-5 xl:right-5">
                        <X/>
                    </Dialog.Close>

                    <div className="flex flex-col text-center justify-center content-center">
                        <span className="text-center font-normal md:font-semibold">
                        Types:
                        </span>
                        {props.types !== undefined && props.types.length > 0 ? (
                            <div className="flex flex-col flex-wrap max-h-80 gap-y-1">
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

                        <span className="text-center font-normal md:font-semibold mt-1">
                            Moves:
                        </span>
                        <div className="flex flex-col flex-wrap max-h-80 gap-x-2 gap-y-1">
                            {props.moves.map((move) => (
                                <p key={move.id} className="text-center font-thin">
                                    {move.name[0].toUpperCase().concat(move.name.slice(1))}
                                </p>
                            ))}
                        </div>

                        <span className="text-center font-normal md:font-semibold mt-1">
                            Version groups:
                        </span>
                        <div className="flex flex-col flex-wrap max-h-80 gap-x-2 gap-y-1">
                            {props.version_groups.map((group) => (
                                <p key={group.id} className="text-center font-thin">
                                    {group.name[0].toUpperCase().concat(group.name.slice(1))}
                                </p>
                            ))}
                        </div>

                        <span className="text-center font-normal md:font-semibold mt-1">
                            Pokemons:
                        </span>
                        <div className="flex flex-col flex-wrap max-h-80 gap-x-2 gap-y-1">
                            {props.pokemon_species.map((pokemon) => (
                                <p key={pokemon.id} className="text-center font-thin">
                                    {pokemon.name[0].toUpperCase().concat(pokemon.name.slice(1))}
                                </p>
                            ))}
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}