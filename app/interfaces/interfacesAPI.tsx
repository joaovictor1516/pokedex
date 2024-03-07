export interface PokemonList{
    name: string;
    url: string;
};

export interface Pokemon{
    id: number;
    name: string;
    abilities: PokemonAbility[];
    types: PokemonTypes[];
    stats: PokemonStats[];
    evoluctions: number[];
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
    base_stat: number;
    effort: number;
    stat: PokemonList;
};