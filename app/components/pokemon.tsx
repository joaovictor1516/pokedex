"use client";
import 'tailwindcss/tailwind.css';
import * as Dialog from "@radix-ui/react-dialog";
import { Pokemon } from '../interfaces/interfacesAPI';
import { useEffect, useState } from 'react';

export default function Principal(props: Readonly<Pokemon>){
    const [color, setColor] = useState("");

    useEffect(() => {
        const changeColor = () => {
            const objColors:{[key: string]: string} = {
                fire: "bg-red-400",
                normal: "bg-neutral-400",
                rock: "bg-gray-400",
                water: "bg-blue-400",
                grass: "bg-green-400",
                flying: "bg-gradient-to-b from-sky-400 to-gray-400",
                poison: "bg-purple-400"
            };
    
            props.types.forEach((typeItem) => {
                if(objColors[typeItem.type.name]){
                    setColor(objColors[typeItem.type.name]);
                }
            })
        };

        changeColor();
    },[props.types]);

    return(
        <Dialog.Root>
            <Dialog.Trigger 
            className="flex flex-1 flex-col gap-y-0.5 border-solid border-red-600 border-2 justify-center content-center items-center text-center rounded-md h-32 w-28 md:w-52 md:h-56">
            
                <span className="">
                    {props.name}
                </span>
                
                <div 
                className="flex flex-row flex-1 flex-wrap gap-x-1 justify-center content-center text-center">
                    {props.abilities.map((abilityItem, id) => (
                
                        <span key={id} className="font-sans font-normal">
                            {abilityItem.ability.name}
                        </span>
                        )
                    )}
                </div>

                <div 
                className="flex flex-row flex-1 flex-wrap gap-x-1 justify-center content-center text-center">
                    {props.types.map((typeItem, id) => (
                        <span key={id}
                            className={`font-sans font-normal ${color} p-1 rounded`}>
                            {typeItem.type.name}
                        </span>
                    ))}
                </div>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className='inset-0 fixed bg-black/50'/>

                <Dialog.Content 
                className="inset-0 fixed rounded-md translate-x-1/2 w-1/2 h-1/2 bg-red-400 border-solid text-black">
                    <div className="flex flex-col text-center">

                        <h1 className="">
                            {props.name}
                        </h1>

                        <span className="">
                            
                        </span>

                        <div className="">

                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>

        </Dialog.Root>
    )
}