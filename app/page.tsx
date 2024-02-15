"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'tailwindcss/tailwind.css';
import Principal from './components/pokemon';
import Header from './components/header';

export default function Home(){
  const [pokemons, setPokemons] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    takeData();
  }, []);  

  const takeData = async () => {
    try{
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
      const results = response.data.results;
      setData(results);
      setPokemons(results.name);
    } catch(error){
      console.error(`Error: ${error}`);
    }
  }

function handleTextSearch(content: string){
  const text = content;
  setPokemons(text);
}
  
  return (
    <>
    <header>
      <Header searchFunction={handleTextSearch}/>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data.map((pokemon, index) => (
        <Principal key={index} name={pokemon.name}/>
      ))}
      <Principal name={pokemons}/>
    </div>
    </>
  )
}
