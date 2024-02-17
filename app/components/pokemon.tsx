"use client";
import 'tailwindcss/tailwind.css'
interface Pokemon{
    name: string;
    ability: string;
}

export default function Principal(props: Readonly<Pokemon>){
    return(
        <div className="flex flex-1 flex-col gap-y-0.5 border-solid border-red-600 border-2 text-center rounded-md w-auto max-w-md">
            <span className="w-auto">{props.name}</span>
            <p className="w-auto">teste</p>
        </div>
    )
}