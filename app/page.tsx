"use client";
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Principal from './components/pokemon';
import Header from './components/header';
import { Ability } from './interfaces/interfacesAPI';
import { searchPokemonByName, searchPokemonList } from '@/api/pokemonAPI';
import axios from 'axios';

interface PokemonDatas{
  name: string;
  url: string;
}

interface PokemonElements{
  name: string;
  abilities: Ability[];
}

export default function Home(){
  const [datas, setDatas] = useState<PokemonDatas[]>([]);

  const [textSearch, setTextSearch] = useState("");
  const [pokemons, setPokemons] = useState<PokemonElements[]>([]);

  function handleTextSearch(content: string){
    setTextSearch(content);
  }

  // const takeData = async () => {
  //   try{
  //     const results = await searchPokemonList();
  //     setDatas(results);
  //   } catch(error){
  //     console.error(`Error: ${error}`);
  //   }
  // }

  // const takeDataValues = async (list: PokemonDatas[]) => {
  //   const takeElements: PokemonElements[] = []; 
  //   try{
  //       for (let i of list){
  //         const response = await searchPokemonByName(i.name);
  //         const name = i.name;
  //         const abilities = response.abilities;
  //         takeElements.push({name: name, 
  //                            abilities: abilities});
  //       }
  //     } catch(error){
  //       console.error(error);
  //     }
  //     setPokemons(() => [...takeElements]);
  // }


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

  const takeDataValues = async (list: PokemonDatas[]) => {
    const takeElements: PokemonElements[] = []; 
    try{
        for (let i of list){
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
