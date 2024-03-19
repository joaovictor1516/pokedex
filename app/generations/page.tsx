"use client";
import { useEffect, useState } from "react";
import { PokemonGeneration, PokemonList } from "../interfaces/interfacesAPI";
import Generations from "../components/generation";
import Header from "../components/header";
import Footer from "../components/footer";
import axios from "axios";

export default function TakeGenerations(){
    const [generations, setGenerations] = useState<PokemonGeneration[]>([]);
    const [data, setData] = useState<PokemonList[]>([]);
    const [textSearch, setTextSearch] = useState("");

    const handleTextSearch = (text: string) => {
        setTextSearch(text.toLowerCase());
    };

    const searchFunction = async() => {
        if(textSearch !== undefined || textSearch !== ""){
            const search: PokemonList[] = [];
            search.push({
                name: textSearch.toLowerCase(),
                url: ""
            });
            await takeGenerations(search);
        } else{
            takeGenerations(data);
        }
    };

    const takeGenerationsData = async() => {
        try{
            const localData = localStorage.getItem("generations");
            if(localData){
                setData(JSON.parse(localData));
                return;
            } else{
                const response = await axios.get("https://pokeapi.co/api/v2/generation");
                const results = await response.data.results;
                localStorage.setItem("generations", JSON.stringify(results));
                setData(results);
            }
        } catch(error){
            console.error(error);
        }
    }

    const takeGenerations = async(data: PokemonList[]) => {
        const pokemonGenerations: PokemonGeneration[] = [];
        try{
            for(const generation of data) {
                const localData = localStorage.getItem(`generation_${generation.name}`);
                let data;

                if(localData){
                    data = JSON.parse(localData);
                } else{
                    const response = await axios.get(`https://pokeapi.co/api/v2/generation/${generation.name}`);
                    data = response.data;
                    localStorage.setItem(`generation_${generation.name}`, JSON.stringify(data));
                }
                const id = await data.id;
                const name = await data.name;
                const mainRegion = await data.main_region;
                const types = await data.types;
                const moves = await data.moves;
                const versionGroups = await data.version_groups;
                const pokemonSpecies = await data.pokemon_species;
                
                pokemonGenerations.push({
                    id: id,
                    name: name[0].toUpperCase().concat(name.slice(1)),
                    main_region: mainRegion,
                    types: types,
                    moves: moves,
                    version_groups: versionGroups,
                    pokemon_species: pokemonSpecies
                });
            }
            setGenerations(pokemonGenerations);
        } catch(error){
            console.error(error);
            }
    };

    useEffect(() => {
        searchFunction();
    }, [textSearch]);
    
    useEffect(() => {
        takeGenerationsData();
    }, []);
    
    useEffect(() => {
        takeGenerations(data);
    }, [data]);

    return(
        <div>
            <Header searchFunction={handleTextSearch}/>

            <ul className="flex justify-center my-1 md:my-2">
                <li className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2 justify-center content-center">
                    {generations.map((generation) => (
                        <Generations key={generation.id}
                                    id={generation.id}
                                    name={generation.name}
                                    main_region={generation.main_region}
                                    types={generation.types}
                                    moves={generation.moves}
                                    version_groups={generation.version_groups}
                                    pokemon_species={generation.pokemon_species}/>
                    ))}
                </li>
            </ul>

            <Footer/>
        </div>
    )
}