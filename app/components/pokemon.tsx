"use client";
import 'tailwindcss/tailwind.css';
import { Ability } from '../interfaces/interfacesAPI';
interface Pokemon{
    name: string;
    abilities: Ability[];
}

export default function Principal(props: Readonly<Pokemon>){

    console.log("Dados: ", props);
    return(
        <div className="flex flex-1 flex-col gap-y-0.5 border-solid border-red-600 border-2 justify-items-center rounded-md w-28 max-w-md">
        
        <span className="text-center">
            {props.name}
        </span>
        
        <div className="flex flex-col flex-1 items-center">
            {props.abilities.map((ability, id) => (
                <span key={id} className="text-center">
                    {ability.name},
                </span>
            ))}
        </div>
        </div>
    )
}