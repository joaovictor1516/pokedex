"use client";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Principal from './components/pokemon';
import Header from './components/header';
import Footer from './components/footer';
import { Pokemon, PokemonEvoluction, PokemonList } from './interfaces/interfacesAPI';
import axios from 'axios';

export default function Home(){
  const [textSearch, setTextSearch] = useState("");
  const [datas, setDatas] = useState<PokemonList[]>([]);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  let listPokemonForms: PokemonList[] = [];

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
    const localData = localStorage.getItem("pokemons");

    if(localData){
      setDatas(JSON.parse(localData));
      return;
    } else{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const results = await response.data.results;
      localStorage.setItem("pokemons", JSON.stringify(results));
      setDatas(results);
    }
  } catch(error){
    console.error(`Error: ${error}`);
  }
};

const takePokemonEvoluctions = async(id: number) => { 
  const speciesResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const evoluctionResponse = await axios.get(speciesResponse.data.evolution_chain.url);
  const evoluctionsElements = await evoluctionResponse.data.chain;

  listPokemonForms = [];
  listPokemonForms.push(evoluctionsElements.species);

  [evoluctionsElements.evolves_to].map((pokemonFirstEvoluctionSpecie: PokemonEvoluction[]) => {
    listPokemonForms.push(pokemonFirstEvoluctionSpecie[0].species);
    
    pokemonFirstEvoluctionSpecie.map((pokemonSecondEvoluctionSpecie: PokemonEvoluction[]) => {
      if(pokemonSecondEvoluctionSpecie.evolves_to[0] !== undefined){
        listPokemonForms.push(pokemonSecondEvoluctionSpecie.evolves_to[0].species);
      }
    });
  });

  return evoluctionsElements;
};

const takeDataValues = async(list: PokemonList[]) => {
  const takeElements: Pokemon[] = []; 
  try{
    if(list !== undefined && list.length > 0){
      for(let pokemonData of list){
        const localData = localStorage.getItem(`pokemon_${pokemonData.name}`);
        let data;
        if(localData){
          data = JSON.parse(localData);
        } else{
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonData.name}`);
          data = response.data;
          localStorage.setItem(`pokemon_${pokemonData.name}`, JSON.stringify(data));
        }
        const name = pokemonData.name;
        const abilities = await data.abilities;
        const types = await data.types;
        const stats = await data.stats;
        const id = await data.id;
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