"use client"
import 'tailwindcss/tailwind.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface SearchBar{
    searchFunction: (content: string) => void;
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

    function handleClearSurch(){
        setSearch("");
        props.searchFunction("");
    }

    return(
        <div className="bg-red-400 flex flex-1 flex-row p-[5px] fixed top-0 left-0 right-0">

            <img src="/assets/pokeBola.png" 
                 alt="Uma bola com a parte superior vermelha e a parte inferior branca com um traço preto na horizontal no meio da bola" 
                 className="w-6"/>

            <nav className="flex flex-1 flex-row">
                <ul className="flex flex-1 flex-row justify-end gap-2">
                    <li className="font-extralight hover:underline">
                        <Link href="/">
                            Home
                        </Link>
                    </li>

                    <li className="font-extralight hover:underline">
                        <Link href="/games">
                            Games
                        </Link>
                    </li>

                    <li className="font-extralight hover:underline">
                        <Link href="/itens">
                            Itens
                        </Link>
                    </li>
                </ul>
            </nav>

            <form onSubmit={handleSubmit}
                className="flex flex-row flex-1 gap-1 justify-end">

                <input type="text"
                className="bg-red-50 relative -right-6 rounded active:border-none p-1 h-6 w-32 md:w-48 xl:w-64"
                placeholder="Buscar"
                onChange={handleSearch}/>

                <button type="reset"
                        className=""
                        onClick={handleClearSurch}>
                    <X className="relative right-1"/>
                </button>

                <button type="submit" 
                        className="rounded bg-red-50 relative h-6 px-1 -right-0.5">
                    Buscar
                </button>
            </form>
        </div>
    )
}