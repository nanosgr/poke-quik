import { component$} from '@builder.io/qwik';
import { type DocumentHead, Link, routeLoader$ } from '@builder.io/qwik-city';
import type { BasicPokemonInfo, PokemonListResponse } from '~/interfaces';

export const usePokemonList = routeLoader$<BasicPokemonInfo[]>( async() =>{
  // Acá es donde podemos utilizar Axios
  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`);
  const data = await resp.json() as PokemonListResponse;

  return data.results;
});

export default component$(() => {

    const pokemons = usePokemonList();
    return(
      <>
        <div class="flex flex-col">
          <span class="my-5 text-5xl">Status</span>
          <span>Página actual: xxxxx</span>
          <span>Está cargando página: xxxx</span>
        </div>

        <div class="mt-10">
          <Link class="btn btn-primary mr-2">Siguientes</Link>
          <Link class="btn btn-primary mr-2">Anteriores</Link>
        </div>

        <div class="grid grid-cols-5 mt-5">
          {
            pokemons.value.map( ({ name }) => (
              <div key={name} class="m-5 flex flex-col justify-center items-center">
                <span class="capitalize">{name}</span>
              </div>
            ))
          }
        </div>
      </>
    );
});

export const head: DocumentHead = {
    title: "PokeQwik - Server Side Rendering",
    meta: [
      {
        name: "description",
        content: "Server Side Rendering",
      },
    ],
  };