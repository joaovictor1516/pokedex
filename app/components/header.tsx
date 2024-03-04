"use client"
import 'tailwindcss/tailwind.css';
import { ChangeEvent, FormEvent, useState } from 'react'

interface SearchBar{
    searchFunction: (content: string) => void
}

export default function Header(props: Readonly<SearchBar>){
    const [search, setSearch] = useState("");

    function handleSearch(content: ChangeEvent<HTMLInputElement>){
        let text = content.target.value;

        setSearch(text);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        props.searchFunction(search.toLocaleLowerCase());
    }

    return(
        <div className="bg-red-400 flex flex-1 flex-row p-[5px]">

            <img src="/assets/pokeBola.png" 
                 alt="uma poke bola" 
                 className="w-6"/>

            <form onSubmit={handleSubmit}
                className="flex flex-row flex-1 gap-1 justify-end">

                <input type="text"
                className="bg-red-50 rounded active:border-none p-1 h-6"
                placeholder="Buscar"
                onChange={handleSearch}
                />

                <button type="submit" 
                className="rounded bg-red-50 h-6 px-1"
                >
                    Buscar
                </button>
            </form>
        </div>
    )
}