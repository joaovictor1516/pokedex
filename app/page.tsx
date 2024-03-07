"use client";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Principal from './components/pokemon';
import Header from './components/header';
import Footer from './components/footer';
import { Pokemon, PokemonList } from './interfaces/interfacesAPI';
import axios from 'axios';

export default function Home(){
  const [datas, setDatas] = useState<PokemonList[]>([]);
  const [textSearch, setTextSearch] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  function handleTextSearch(content: string){
    setTextSearch(content.toLowerCase());
  }

  const takePokemonSearch = async() => {
    const pokemonSearched: Pokemon[]= [];
    
    if(textSearch !== undefined && textSearch.trim() !== ""){ 
      try{
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textSearch}`);
      const datas = response.data;
      pokemonSearched.push(datas);
      setPokemons(pokemonSearched);
      } catch(error){
          console.error(error);
      }
    } else{
      takeDataValues(datas);
    }
  }

  const takeData = async () => {
  try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const results = await response.data.results;
    setDatas(results);
  } catch(error){
    console.error(`Error: ${error}`);
  }
}

const takeDataValues = async (list: PokemonList[]) => {
  const takeElements: Pokemon[] = []; 
  try{
      for(let i of list){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i.name}`);
        const name = i.name;
        const abilities = response.data.abilities;
        const types = response.data.types;
        const stats = response.data.stats;
        const id = response.data.id;
        const evoluctions = [];

        if((id + 2) % 3 === 0){
          evoluctions.push(id, id + 1, id + 2); 
        } else if((id + 1) % 3 === 0){
          evoluctions.push(id - 1, id, id + 1);
        } else{
          evoluctions.push(id - 2, id - 1, id);
        }

        takeElements.push({ 
                            id: id,
                            name: name, 
                            abilities: abilities,
                            types: types,
                            stats: stats,
                            evoluctions: evoluctions
                          });
        }
      } catch(error){
      console.error(error);
      }
    setPokemons(() => [...takeElements]);
  }

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
                        evoluctions={pokemon.evoluctions}/>
            ))}
          </li>
        </ul>
      <Footer/>
    </div>
  )
}