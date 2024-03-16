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
            const response = await axios.get("https://pokeapi.co/api/v2/generation");
            const results = await response.data.results;
            setData(results);
        } catch(error){
            console.error(error);
        }
    }

    const takeGenerations = async(data: PokemonList[]) => {
        const pokemonGenerations: PokemonGeneration[] = [];
        try{
            for(const generation of data) {
                const response = await axios.get(`https://pokeapi.co/api/v2/generation/${generation.name}`);
                const id = await response.data.id;
                const name = await response.data.name;
                const moves = await response.data.moves;
                const types = await response.data.types;
                const versionGroups = await response.data.version_groups;
                const pokemonSpecies = await response.data.pokemon_species;
                
                pokemonGenerations.push({
                    id: id,
                    name: name[0].toUpperCase().concat(name.slice(1)),
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
        <div className="">
            <Header searchFunction={handleTextSearch}/>

            <ul className="">
                <li className="">
                    {generations.map((generation) => (
                        <Generations key={generation.id}
                                    id={generation.id}
                                    name={generation.name}
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