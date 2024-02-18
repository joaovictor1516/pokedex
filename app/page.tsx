"use client";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Principal from './components/pokemon';
import Header from './components/header';
import { searchPokemonByName, searchPokemonList } from '@/api/pokemonAPI';

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

  const takeData = async () => {
    try{
      const results = await searchPokemonList();
      setDatas(results);
    } catch(error){
      console.error(`Error: ${error}`);
    }
  }

  useEffect(() => {
    takeData();
  }, [takeData]);

  useEffect(() => {
    console.log(datas)
  }, [datas]);

  const takeDataValues = async (list: PokemonDatas[]) => {
    const takeElements: PokemonElements[] = []; 
    try{
        for (let i in list){
          const response = await searchPokemonByName(list[i].name);
          const name = list[i].name;
          const abilities = response.abilities;
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

  useEffect(() => {
    console.log(pokemons)
  }, [pokemons]);

    function handleTextSearch(content: string){
      const text = content;
      setTextSearch(text);
    }
  
  return (
    <>
    <header>
      <Header searchFunction={handleTextSearch}/>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 m-1">
      {pokemons.map((pokemon, index) => (
        <Principal key={index} name={pokemon.name} ability={"teste"}/>
      ))}
      <Principal name="outro teste" ability='teste'/>
      <Principal name="outro teste" ability='teste'/>
    </div>
    </>
  )
}
