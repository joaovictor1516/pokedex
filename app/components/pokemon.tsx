"use client";
import 'tailwindcss/tailwind.css';
import * as Dialog from "@radix-ui/react-dialog";
import { Pokemon } from '../interfaces/interfacesAPI';



export default function Principal(props: Readonly<Pokemon>){

    return(
        <Dialog.Root>
            <Dialog.Trigger 
            className="flex flex-1 flex-col gap-y-0.5 border-solid border-red-600 border-2 justify-items-center rounded-md h-32 w-28 md:w-52 md:h-56 text-center">
            
                <span className="">
                    {props.name}
                </span>
                
                <div 
                className="flex flex-row flex-1 items-center gap-x-1">
                    {props.abilities.map((abilityItem, id) => (
                
                        <span key={id} className="font-sans font-normal">
                            {abilityItem.ability.name}
                        </span>
                        )
                    )}
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