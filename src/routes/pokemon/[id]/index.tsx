import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import { PokemonsImage } from '../../../components/pokemons/pokemons-image';

export const usePokemonId = routeLoader$<number>(( { params, redirect } ) => {
    const id = Number(params.id);
    if(isNaN(id)) throw redirect(301, "/");
    if(id < 1) throw redirect(301, "/");
    if(id > 1010) throw redirect(301, "/");
    return id;
})

export default component$(() => {
    // const location = useLocation();
    const pokemonId = usePokemonId();
    
    return (
        <>        
            {/* <span class="text-5xl">Pokemon: {location.params.id}</span> */}
            <span class="text-5xl">Pokemon: {pokemonId.value}</span>
            <PokemonsImage id={ pokemonId.value } />
        </>
    )
});

export const head: DocumentHead = {
    title: "PokeQwik - Pokemon",
  };