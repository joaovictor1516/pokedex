import { GameClient } from "pokenode-ts";

const GameAPI = new GameClient();

export function searchPokedexByName(name: string){
    GameAPI.getPokedexByName(name)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        throw new Error(error);
    })
};