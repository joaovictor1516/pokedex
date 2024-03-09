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
    evoluctions: PokemonEvolutionChains[];
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

export interface PokemonItems{
    id: number;
    name: string;
    sprites: PokemonSprite;
};

export interface PokemonSprite{
    default: string;
};

export interface PokemonEvolutionChains{
    species: PokemonList;
    evolves_to: PokemonEvolutionChains["species"];
};