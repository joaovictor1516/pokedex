export interface PokemonList{
    name: string;
    url: string;
};

export interface Pokemon{
    name: string;
    abilities: PokemonAbility[]
}

export interface PokemonAbility{
    is_hidden: boolean;
    slot: number;
    ability: PokemonList;
};

export interface PokemonTypes{
    slot: number;
    type: PokemonList;
};

export interface PokemonStats{
    
}