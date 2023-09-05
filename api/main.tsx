import { PokemonClient }  from "pokenode-ts";

const PokedexApi = new PokemonClient();

export function searchPokemon(name: string){
  PokedexApi.getPokemonByName(name) // with Promise
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log('There was an ERROR: ', error);
    });
}