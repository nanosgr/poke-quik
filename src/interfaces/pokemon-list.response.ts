
export interface PokemonListResponse {
    count:      number;
    next:       number;
    previous:   string;
    results:    BasicPokemonInfo[];
}

export interface BasicPokemonInfo {
    name:   string;
    url:    string;
}