"use client";
import { PokemonItems, PokemonList } from "../interfaces/interfacesAPI";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Items from "../components/items";
import axios from "axios";

export default function ShowItems(){
    const [textSearch, setTextSearch] = useState("");
    const [items, setItems] = useState<PokemonItems[]>([]);
    const [data, setData] = useState<PokemonList[]>([]);

    const searchFunction = (text: string) => {
        setTextSearch(text.toLowerCase());
    };

    const searchItem = async() => {
        if(textSearch !== undefined && textSearch.trim() !== ""){
            try{
                const itemSearched:PokemonList[] =[];
                itemSearched.push({
                    name: textSearch.toLowerCase(),
                    url: ""
                });
                searchFunction(textSearch);
                takeItems(itemSearched);
            } catch(error){
                console.error(error);
            }
        } else{
            takeItems(data);
        }
    };

    const takeDataItems = async() => {
        try{
            const localData = localStorage.getItem("items");

            if(localData){
                setData(JSON.parse(localData));
                return;
            } else{        
                const response = await axios.get("https://pokeapi.co/api/v2/item");
                const results = await response.data.results;
                localStorage.setItem("items", JSON.stringify(results));
                setData(results);
            }
        } catch(error){
            console.error(error);
        }
    };

    const takeItems = async(data: PokemonList[]) => {
        const item: PokemonItems[] = [];
        for (const i of data) {
            const localData = localStorage.getItem(`item_${i.name}`);
            let data;
            
            if(localData){
                data = JSON.parse(localData);
            } else{
                const response = await axios.get(`https://pokeapi.co/api/v2/item/${i.name}`);
                data = await response.data;
                localStorage.setItem(`item_${i.name}`, JSON.stringify(data));
            }

            item.push({
                id: data.id,
                name: i.name,
                sprites: data.sprites
            });
        }
        setItems(item);
    };

    useEffect(() => {
        takeDataItems();
    }, []);

    useEffect(() => {
        takeItems(data);
    }, [data]);

    useEffect(() => {
     searchItem();
    }, [textSearch]);
    
    return(
        <div>
            <Header searchFunction={searchFunction}/>
                <ul className="flex justify-center my-1 md:my-2">
                    <li className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 md:gap-2 justify-center content-center">
                        
                        {items.map((item) => (
                            <Items key={item.id} id={item.id} name={item.name} sprites={item.sprites}/>
                        ))}
                    
                    </li>
                </ul>
            <Footer/>
        </div>
    )
}