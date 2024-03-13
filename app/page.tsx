"use client";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Principal from './components/pokemon';
import Header from './components/header';
import Footer from './components/footer';
import { Pokemon, PokemonEvoluction, PokemonList } from './interfaces/interfacesAPI';
import axios from 'axios';

export default function Home(){
  const [datas, setDatas] = useState<PokemonList[]>([]);
  const [textSearch, setTextSearch] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [evoluctionPokemon, setEvoluctionPokemon] = useState<PokemonEvoluction[]>([]);
  const [checkEvoluctionPokemon, setCheckEvoluctionPokemon] = useState<PokemonEvoluction[]>([])
  let listPokemonForms:number[] = [];

  function handleTextSearch(content: string){
    setTextSearch(content.toLowerCase());
  };

  const takePokemonSearch = async() => {
    if(textSearch !== undefined && textSearch.trim() !== ""){ 
      try{
        const pokemonSearched: PokemonList[]= [];
        pokemonSearched.push({
          name: textSearch.toLowerCase(),
          url: ""
        });
        handleTextSearch(textSearch);
        await takeDataValues(pokemonSearched);
      } catch(error){
          console.error(error);
      }
    } else{
      await takeDataValues(datas);
    }
  };

  const takeData = async () => {
  try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const results = await response.data.results;
    setDatas(results);
  } catch(error){
    console.error(`Error: ${error}`);
  }
};

const takePokemonEvoluctions = async(id: number) => { 
  const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const evoluctionResponse = await axios.get(speciesResponse.data.evolution_chain.url);
  const evoluctionsElements = await evoluctionResponse.data.chain;

  setEvoluctionPokemon(evoluctionsElements);
  console.log("id: ",id);

  if(checkEvoluctionPokemon.length === 0){
    setCheckEvoluctionPokemon(evoluctionsElements);
    console.log("teste");
    listPokemonForms.shift();
  }
  
  if(JSON.stringify(checkEvoluctionPokemon) !== JSON.stringify(evoluctionPokemon)){
    listPokemonForms.shift();
    setCheckEvoluctionPokemon(evoluctionPokemon);
    console.log("iguais");
  } else{
    listPokemonForms.push(id);
  }

  console.log(listPokemonForms);
  return evoluctionsElements;
};

const takeDataValues = async(list: PokemonList[]) => {
  const takeElements: Pokemon[] = []; 
  try{
      for(let i of list){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i.name}`);
        const name = i.name;
        const abilities = await response.data.abilities;
        const types = await response.data.types;
        const stats = await response.data.stats;
        const id = await response.data.id;
        const evoluctions = await takePokemonEvoluctions(id);

        takeElements.push({ 
                            id: id,
                            name: name, 
                            abilities: abilities,
                            types: types,
                            stats: stats,
                            evoluctions: evoluctions,
                            listForms: listPokemonForms
                          });
        }
      } catch(error){
      console.error(error);
      }
    setPokemons(() => [...takeElements]);
  };

  useEffect(() => {
    takeData();
  }, []);

  useEffect(() => {
    takeDataValues(datas);
  }, [datas]);

  useEffect(() => {
    takePokemonSearch();
  }, [textSearch]);

  useEffect(() => {
    console.log("checkEvoluctionPokemon: ", checkEvoluctionPokemon);
  }, [checkEvoluctionPokemon]);
  
  return (
    <div>
      <Header searchFunction={handleTextSearch}/>
        <ul className="flex justify-center my-1 md:my-2">
          <li className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2 justify-center content-center">
            {pokemons.map((pokemon) => (
              <Principal key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        abilities={pokemon.abilities}
                        types={pokemon.types}
                        stats={pokemon.stats}
                        evoluctions={pokemon.evoluctions}
                        listForms={pokemon.listForms}/>
            ))}
          </li>
        </ul>
      <Footer/>
    </div>
  )
}