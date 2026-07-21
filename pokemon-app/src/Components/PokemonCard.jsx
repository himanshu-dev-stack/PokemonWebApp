import axios from 'axios';
import React, { useEffect, useState } from 'react'
import getColor from './GetColor';
import graDient from './Gradiant';
import PokeIcons from './PokeIcons';
function PokemonCard(props) {

  const [pokemonItem, setPokemonItem] = useState({
    name: "",
    img: '',
    hp: '',
    attack: '',
    defense: '',
    specialAttack: '',
    specialDefense: '',
    speed: '',
    height: '',
    weight: '',
    type_1: '',
    type_2: '',
    voice: ''
  });

  const fetchPokemon = async () => {
    const response = await axios.get(props.pokemonUrl);
    const data = await response.data;
    console.log(data);
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
      voice: data.cries.latest
    };
    setPokemonItem(pokemon);
  }

  const ColorCard = {
    grass: "#74cb48",
    fire: "#EE8130",
    water: "#6390F0",
    normal: "#A8A77A",
    bug: "#A6B91A"
  }

  useEffect(() => {
    fetchPokemon();
  }, [props.pokemonUrl]);


  return (
    <div className='w-full p-3'>
      {/* Main Card Container */}
      <div className="relative w-full pt-20">

        {/* Floating Pokemon Image */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 w-50">
          <img
            src={pokemonItem.img}
            alt={pokemonItem.name}
            className="drop-shadow-2xl"
          />
        </div>

        {/* Card Body */}
        <div className={`${graDient(pokemonItem.type_1)} rounded-2xl p-6 pt-24 text-white text-center shadow-xl dark:shadow-neutral-600 dark:shadow-xl`}> 

          {/* Name Section */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
            <h1 className="text-3xl font-bold tracking-tight capitalize">{pokemonItem.name}</h1>
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </div>

          {/* Types Section */}
          <div className="flex justify-center gap-3 mb-8">
            <div className={`flex items-center gap-1 ${getColor(pokemonItem.type_1)} px-3 py-1 rounded-lg text-xs font-bold uppercase`}>
              <img src={PokeIcons(pokemonItem.type_1)} className='w-4 h-4' alt={pokemonItem.type_1}/>{pokemonItem.type_1}
            </div>

            {
              pokemonItem.type_2 &&
              <div className={`flex items-center gap-1 ${getColor(pokemonItem.type_2)} px-3 py-1 rounded-lg text-xs font-bold uppercase`}>
                <img src={PokeIcons(pokemonItem.type_2)} className='w-4 h-4' alt={pokemonItem.type_2}/>{pokemonItem.type_2}
              </div>
            }
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-6">
            <div>
              <p className="text-lg font-semibold text-white">{pokemonItem.height} Cm</p>
              <p className="text-xs text-white/70 uppercase">Height</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">{pokemonItem.weight} Kg</p>
              <p className="text-xs text-white/70 uppercase">Weight</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PokemonCard