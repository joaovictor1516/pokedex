"use client";
import 'tailwindcss/tailwind.css';
import * as Dialog from "@radix-ui/react-dialog";
import { Pokemon } from '../interfaces/interfacesAPI';



export default function Principal(props: Readonly<Pokemon>){

    console.log("Dados: ", props);
    return(
        <Dialog.Root>
            <Dialog.Trigger className="flex flex-1 flex-col gap-y-0.5 border-solid border-red-600 border-2 justify-items-center rounded-md w-28 max-w-md">
            
                <span className="text-center">
                    {props.name}
                </span>
                
                <div className="flex flex-col flex-1 items-center">
                    {props.abilities.map((abilityItem, id) => (
                
                        <span key={id} className="text-center font-sans font-normal">
                            {abilityItem.ability.name}
                        </span>
                        )
                    )}
                </div>
            </Dialog.Trigger>

            <Dialog.Content className="fixed w-10 z-0 bg-red-400 text-black">
                <div>Teste</div>
            </Dialog.Content>

        </Dialog.Root>
    )
}