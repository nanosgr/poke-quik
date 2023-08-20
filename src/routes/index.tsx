/* eslint-disable qwik/jsx-img */
import { $, component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead, useNavigate } from "@builder.io/qwik-city";
import { PokemonsImage } from "~/components/pokemons/pokemons-image";

export default component$(() => {

  // Utilizar con primitivos (booleans, numbers, strings)
  const pokemonId = useSignal(1);
  const backImagePokemon = useSignal(false);
  const showPokemon = useSignal(true);
  const nav = useNavigate();

  const changePokemonId = $((value: number) => {
    if((pokemonId.value + value) <= 0) return;
    pokemonId.value += value;
  })

  const goToPokemon = $(async () => {
    await nav(`/pokemon/${ pokemonId.value }/`)
  })

  return (
    <>
      <span class="text-2xl">Buscador Simple</span>
      <span class="text-9xl">{ pokemonId }</span>

      {/* <Link href={`/pokemon/${ pokemonId.value }/`}> */}
      <div onClick$={ () => goToPokemon() }>
        <PokemonsImage 
          id={ pokemonId.value } 
          backImage={ backImagePokemon.value } 
          showPokemon={ showPokemon.value }
        />
      </div>
      {/* </Link> */}

      <div class="mt-5">
        <button onClick$={ () => changePokemonId(-1) } class="btn btn-primary mr-2">Anterior</button>
        <button onClick$={ () => changePokemonId(1) } class="btn btn-primary mr-2">Siguiente</button>
        <button onClick$={ () => (backImagePokemon.value = !backImagePokemon.value) } class="btn btn-primary mr-2">Espalda</button>
        <button onClick$={ () => (showPokemon.value = !showPokemon.value) } class="btn btn-primary">Mostrar</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "Prueba de app en qwik",
    },
  ],
};