"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import Principal from './components/pokemon';
import Header from './components/header';

interface PokemonElements{
  name: string;
  abilities: [];
}

interface PokemonDatas{
  name: string;
  url: string;
}

export default function Home(){
  const [datas, setDatas] = useState<PokemonDatas[]>([]);

  const [textSearch, setTextSearch] = useState("");
  const [pokemons, setPokemons] = useState<PokemonElements[]>([]);

  useEffect(() => {
    takeData();
  }, []);  

  const takeData = async () => {
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const results = response.data.results;
      setDatas(results);
    } catch(error){
      console.error(`Error: ${error}`);
    }
  }

  const takeDataValues = async (list: any) => {
    const takeElements: any[] = []; 
    try{
        for (let i in list){
          const response = await axios.get(list[i].url);
          const name = list[i].name;
          const abilities = response.data.abilities;
          takeElements.push({name: name, 
                             abilities: abilities});
        }
      } catch(error){
        console.error(error);
      }
      setPokemons(() => [...takeElements]);
  }

  useEffect(() => {
    takeDataValues(datas);
  }, [datas]);

    function handleTextSearch(content: string){
      const text = content;
      setTextSearch(text);
    }
  
  return (
    <>
    <header>
      <Header searchFunction={handleTextSearch}/>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {pokemons.map((pokemon, index) => (
        <Principal key={index} name={pokemon.name} ability={pokemon.abilities.abilities}/>
      ))}
      <Principal name={textSearch} ability='teste'/>
    </div>
    </>
  )
}
