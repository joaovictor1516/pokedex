"use client";
import React, {ChangeEvent, useState} from 'react';
import Principal from './components/pokemon';

export default function Home(){
  const [pokemons, setPokemons] = useState("");

function textSearch(value: ChangeEvent<HTMLInputElement>){
  const text = value.target.value;
  console.log(text);
  setPokemons(text);
}

  
  return (
    <>
    <header>
      <input type="text" 
        onChange={textSearch}
      />
    </header>

    <main>
      <Principal id={2} name={pokemons}/>
    </main>
    </>
  )
}
