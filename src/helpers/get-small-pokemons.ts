// Hacemos esta función en archivo separado para poder ser utilizada desde otro componente de la aplicación.

import type { PokemonListResponse, SmallPokemon } from "~/interfaces";

export const getSmallPokemons = async(offset: number = 0, limit: number = 10): Promise<SmallPokemon[]> => {
    // Acá es donde podemos utilizar Axios
    const urlPokeAPI = `https://pokeapi.co/api/v2/pokemon?limit=${limit}${(offset > 0) ? `&offset=${ offset }` : ''}`;
    const resp = await fetch(urlPokeAPI);
    const data = await resp.json() as PokemonListResponse;

    return data.results.map( ({url, name}) => {
        // Dividimos la cadena en función de /
        const segments = url.split('/');
        const id = String(segments.at(-2));

        return {
            id,
            name,
        }
    });
}