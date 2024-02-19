import { PokemonClient }  from "pokenode-ts";

const PokemonApi = new PokemonClient();

export async function searchPokemonByName(name: string){
  return await PokemonApi.getPokemonByName(name)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export async function searchPokemonById(id: number){
  return await PokemonApi.getPokemonById(id)
  .then((data) => {
    return data;
  })
  .catch((error) => {
    throw new Error(error);
  })
};

export async function searchPokemonList(){
  return await PokemonApi.listPokemons()
  .then((data) => {
    return data.results;
  })
  .catch((error) => {
    throw new Error(error);
  })
}