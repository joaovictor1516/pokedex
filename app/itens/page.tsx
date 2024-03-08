"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import Itens from "../components/itens";
import { useState, useEffect } from "react";

export default function ShowItens(){
    return(
        <div>
            <Header searchFunction={() => "oi"}/>
                <Itens/>
            <Footer/>
        </div>
    )
}