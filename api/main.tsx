import { PokemonClient }  from "pokenode-ts";

const PokedexApi = new PokemonClient();

export function searchPokemon(name: string){
  PokedexApi.getPokemonByName(name)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      throw new Error(error);
    });
}