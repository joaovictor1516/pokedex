"use client";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Principal from './components/pokemon';
import Header from './components/header';
import { Pokemon, PokemonList } from './interfaces/interfacesAPI';
import axios from 'axios';

export default function Home(){
  const [datas, setDatas] = useState<PokemonList[]>([]);

  const [textSearch, setTextSearch] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  function handleTextSearch(content: string){
    setTextSearch(content);
  }

  const takeData = async () => {
  try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const results = await response.data.results;
    setDatas(results);
    console.log(results)
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
        takeElements.push({name: name, 
                            abilities: abilities});
        }

      console.log(takeElements);
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
  
  return (
    <>
    <header>
      <Header searchFunction={handleTextSearch}/>
    </header>

    <div className="grid grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-1 xl:gap-1 m-1">
      {pokemons.map((pokemon, id) => (
        <Principal key={id} name={pokemon.name} abilities={pokemon.abilities}/>
      ))}
    </div>
    </>
  )
}