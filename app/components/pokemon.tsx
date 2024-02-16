"use client";
import 'tailwindcss/tailwind.css'
interface Pokemon{
    name: string;
    ability: {
        name: string,
        url: string
    };
}

export default function Principal(props: Readonly<Pokemon>){
    return(
        <div className="flex  border-solid border-red-600 border-2 text-center">
            <span>{props.name}</span>
        </div>
    )
}