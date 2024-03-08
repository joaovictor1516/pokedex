"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import Items from "../components/items";
import { useState, useEffect } from "react";

export default function ShowItems(){
    return(
        <div>
            <Header searchFunction={() => "oi"}/>
                <Items/>
            <Footer/>
        </div>
    )
}