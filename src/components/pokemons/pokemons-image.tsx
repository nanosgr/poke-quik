/* eslint-disable qwik/jsx-img */
import { component$, useSignal, useTask$ } from '@builder.io/qwik';

interface Props {
    id: number|string;
    size?: number;
    backImage?: boolean;
    showPokemon?: boolean;
}

export const PokemonsImage = component$(({id, size=200, backImage=false, showPokemon=true}: Props) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
        track(() => id);

        imageLoaded.value = false;
    });
    
    const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(backImage ? 'back/' : '') + id }.png`
    
    return (
        <div class="flex items-center justify-center"
            style={{width: `${ size }px`, height: `${ size }px`}}>
            { !imageLoaded.value && <span>Cargando...</span> }
            <img 
                src={urlImage} 
                alt="Pokemon Sprite" 
                style={{width: `${ size }px`}}
                onLoad$={() => imageLoaded.value = true }
                class={[{
                    'hidden': !imageLoaded.value, 
                    'brightness-0': !showPokemon,
                }, 'transition-all']}
            />
        </div>)
});