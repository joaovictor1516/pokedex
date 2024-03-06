"use client";
import "tailwindcss/tailwind.css";
import { PokemonList } from "../interfaces/interfacesAPI";
import { useEffect, useState } from "react";
import Games from "@/app/components/games";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";

export default function ShowGames(){
    const [games, setGames] = useState<PokemonList[]>([]);
    const [datas, setDatas] = useState<PokemonList[]>([]);
    const [textSearch, setTextSearch] = useState("");

    const takeGames = async() => {
        const response = await axios.get("https://pokeapi.co/api/v2/version");
        const results = response.data.results;
        setGames(results);
    };

    const handleSearch = (text: string) => {
        setTextSearch(text.toLowerCase());
    };

    const takeDatas = () => {
        if(games.length > 1){
            setDatas(games);
        }
    }

    const takeGameSearch = async() => {
        const gameSearch: PokemonList[] = [];

        if(textSearch !== undefined && textSearch !== ""){ 
            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/version/${textSearch}`);
                const data = response.data;
                gameSearch.push(data);
                setGames(gameSearch);
            } catch(error){
                console.error(error);
            }
        } else{
            setGames(datas);
        }
    } 

    useEffect(() => {
        takeGames();
    }, []);

    useEffect(() => {
        takeGameSearch();
    }, [textSearch]);

    useEffect(() => {
        takeDatas();
    }, [games]);

    return(
        <div>
            <Header searchFunction={handleSearch}/>
            <ul className="flex justify-center my-1 md:my-2">
                <li className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2 justify-center content-center">
                {games.map((game, id) => (
                    <Games key={id} name={game.name[0].toUpperCase().concat(game.name.slice(1))} url={game.url}/>
                ))}
                </li>
            </ul>
            <Footer/>
        </div>
    )
}