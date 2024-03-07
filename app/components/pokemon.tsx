"use client";
import "tailwindcss/tailwind.css";
import * as Dialog from "@radix-ui/react-dialog";
import { Pokemon } from "../interfaces/interfacesAPI";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

export default function Principal(props: Readonly<Pokemon>){
    const [color, setColor] = useState<{[key: string]: string}>({});
    const [evoluctionsPokemon, setEvoluctionsPokemon] = useState<Pokemon[]>([]);

    
    const changeColor = () => {
        const objColors:{[key: string]: string} = {
            fire: "bg-red-400",
            normal: "bg-neutral-400",
            rock: "bg-gray-400",
            water: "bg-blue-400",
            grass: "bg-green-400",
            flying: "bg-gradient-to-b from-sky-400 to-gray-400",
            poison: "bg-purple-400",
            bug: "bg-green-400",
            electric: "bg-yellow-400"
        };

        const newColors:{[key: string]: string} = {};

        props.types.forEach((typeItem) => {
            if(objColors[typeItem.type.name]){
                newColors[typeItem.type.name] = objColors[typeItem.type.name];
            }
        });
        setColor(newColors);
    };

    const takePokemonEvoluctions = async() => {
        const pokemon: Pokemon[] = [];
        for(let i of props.evoluctions){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const datas = await response.data;
            pokemon.push(datas);
        }
        setEvoluctionsPokemon(pokemon)
    };

    useEffect(() => {
        changeColor();
    },[props.types]);

    useEffect(() => {
        takePokemonEvoluctions()
    }, [props.evoluctions]);

    return(
        <Dialog.Root>
            <Dialog.Trigger 
            className="flex flex-1 flex-col gap-y-0.5 border-solid border-red-400 border-2 justify-center content-center items-center text-center rounded-md h-44 w-28 md:w-52 md:h-56 hover:border-amber-400">

                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={`Imagem do ${props.name}`} className="" />
            
                <span className="font-bold">
                    {props.name[0].toUpperCase().concat(props.name.slice(1))}
                </span>
                
                <div 
                className="flex flex-row flex-1 flex-wrap gap-x-1 justify-center content-center text-center">
                    {props.types.map((typeItem, id) => (
                        <span key={id}
                            className={`font-normal ${color[typeItem.type.name]} p-1 rounded`}>
                            {typeItem.type.name[0].toUpperCase().concat(typeItem.type.name.slice(1))}
                        </span>
                    ))}
                </div>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/50'/>

                <Dialog.Content 
                className="fixed inset-0 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 flex flex-col w-full md:max-w-[640px] md:h-[70vh] bg-red-400 border-solid md:rounded-md text-black">

                    <Dialog.Close className="absolute top-0 right-0">
                        <X/>
                    </Dialog.Close>

                    <div className="flex flex-col text-center justify-center content-center">

                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={`Imagem do ${props.name}`} className="h-52 w-52 self-center"/>

                        <h1 className="font-bold">
                            {props.name[0].toUpperCase().concat(props.name.slice(1))}
                        </h1>

                        <h3 className="font-semibold mt-1">
                            Stats:
                        </h3>

                        <div className="">
                            {props.stats.map((statsItem, id) => (
                                <div 
                                key={id} 
                                className="flex flex-row flex-1 justify-center content-center gap-x-0.5">
                                    <span className="">
                                        {statsItem.stat.name[0].toUpperCase().concat(statsItem.stat.name.slice(1))}:
                                    </span>
                                    <p className="">
                                       {statsItem.base_stat}
                                    </p>
                                    <br/>
                                </div>
                            ))}
                        </div>

                        <h3 className="font-semibold mt-1">
                            Abilities:
                        </h3>

                        <div 
                        className="flex flex-row flex-1 flex-wrap gap-x-1 justify-center content-center text-center">
                            {props.abilities.map((abilityItem, id) => (
                        
                                <span key={id} className="font-normal">
                                    {abilityItem.ability.name[0].toUpperCase().concat(abilityItem.ability.name.slice(1))}
                                </span>
                                )
                            )}
                        </div>
                        
                        <div className="flex flex-row flex-1 flex-wrap gap-x-1 justify-center content-center text-center">
                            {evoluctionsPokemon.map((pokemon) => (
                                <span key={pokemon.id}>
                                    {pokemon.name}
                                </span>
                            ))}
                        </div>

                    </div>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    )
}