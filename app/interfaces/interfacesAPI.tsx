export interface PokemonList{
    id?: number;
    name: string;
    url: string;
};

export interface Pokemon{
    id: number;
    name: string;
    abilities: PokemonAbility[];
    types: PokemonTypes[];
    stats: PokemonStats[];
    evoluctions: PokemonEvoluction[];
    listForms: PokemonList[];
};

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

export interface PokemonEvoluction{
    evolves_to: PokemonEvoluction;
    species: PokemonList;
};

export interface PokemonGeneration{
    id: number;
    name: string;
    main_region: PokemonList;
    types?: PokemonList[];
    moves: PokemonList[];
    version_groups: PokemonList[];
    pokemon_species: PokemonList[];
};