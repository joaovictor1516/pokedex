"use client";
import { useState } from "react";
import { PokemonItems } from "../interfaces/interfacesAPI";

export default function Items(props: Readonly<PokemonItems>){
    return(
        <div className="">
            <img src={props.sprites.default} 
                alt={`Image of the item ${props.name}`} 
                className=""/>

            <h3 className="">
                {props.name}
            </h3>
        </div>
    )
}