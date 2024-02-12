import { PokemonClient }  from "pokenode-ts";

const PokemonApi = new PokemonClient();

export function searchPokemonByName(name: string){
  PokemonApi.getPokemonByName(name)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export function searchPokemonById(id: number){
  PokemonApi.getPokemonById(id)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    throw new Error(error);
  })
};

export function searchPokemonList(){
  PokemonApi.listPokemons()
  .then((data) => {
    return data;
  })
  .catch((error) => {
    throw new Error(error);
  })
}