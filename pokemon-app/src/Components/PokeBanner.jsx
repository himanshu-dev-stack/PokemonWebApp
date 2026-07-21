import axios from 'axios';
import { Volume2 } from 'lucide-react';
import { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar';
import PokeIcons from './PokeIcons';
import graDient from './Gradiant';
import getColor from './GetColor';

const PokeBanner = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const getPokemonList = async () => {
        const randomNum = Math.floor(Math.random() * 1020 + 1);
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}`);
            const data = await response.data;
            console.log(data);
            console.log(data.types[0]?.type?.name);
            console.log(data.types[1]?.type?.name);
            const pokemon = {
                name: data.name,
                //  img: data.sprites.other.official-network.front_default,
                img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png",
                hp: data.stats[0].base_stat,
                attack: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                specialAttack: data.stats[3].base_stat,
                specialDefense: data.stats[4].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight,
                type_1: data.types[0]?.type?.name || "",
                type_2: data.types[1]?.type?.name || "",
                voice: data.cries.latest,
                id: data.id
                };
                setPokemonList(pokemon);
        } catch (error) {
            console.log(error);
        }
    }
   
    const cryPlay = () => {
        const audio = new Audio(pokemonList.voice);
        audio.play();
    }
    const getNewPokemon = () => {
        Math.floor(Math.random() * 1020 + 1);
        getPokemonList();
    }
    useEffect(() => {
        const Func = () => {
            getPokemonList();
        }
        Func();
    }, []);


    return (
        <div>
            <div className={`w-full grid grid-cols-2 max-sm:grid-cols-1 ${graDient(pokemonList.type_1)} flex items-center p-12 text-white`}>

                <div className="w-full">
                    <img
                        src={pokemonList.img}
                        alt={pokemonList.name}
                        className="w-full max-w-md drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    />
                </div>

                <div className='px-3 flex justify-center items-center w-full'>
                    <div>
                        <div className="w-full px-4 py-4">
                            <h1 className="text-4xl font-bold mb-4 tracking-tight">{pokemonList.name}</h1>

                            <div className="flex items-center gap-4 mb-8">
                                <div className={`${getColor(pokemonList.type_1)} p-2 rounded-full text-black`}>
                                    <img src={PokeIcons(pokemonList.type_1)} alt="" className='h-10 w-10' />
                                </div>
                                {
                                    pokemonList.type_2 &&
                                    <div className={`${getColor(pokemonList.type_1)} p-2 rounded-full text-black`}>
                                        <img src={PokeIcons(pokemonList.type_2)} alt="" className='h-10 w-10' />
                                    </div>
                                }
                            </div>

                            {/* Stats Grid */}
                            <div className="space-y-3 mb-8 max-w-md">
                                <div className="flex flex-col items-center gap-1 text-sm font-medium">
                                    <ProgressBar value={pokemonList.hp} />
                                    <ProgressBar value={pokemonList.attack} />
                                    <ProgressBar value={pokemonList.defense} />
                                    <ProgressBar value={pokemonList.specialAttack} />
                                    <ProgressBar value={pokemonList.specialDefense} />
                                    <ProgressBar value={pokemonList.speed} />
                                    {/* Left Bar */}
                                    </div>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 mb-6">
                                <button className="bg-[#2b59b2] px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition flex gap-2 cursor-pointer " onClick={cryPlay}><Volume2 size={24} />Play Cry</button>
                            </div>

                            <button className="flex items-center gap-2 bg-[#1a56ad] px-4 py-3 rounded-lg text-sm font-bold shadow-lg hover:scale-105 transition cursor-pointer" onClick={getNewPokemon}>
                                Get Another Pokemon
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokeBanner