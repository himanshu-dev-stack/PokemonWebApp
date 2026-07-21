import axios from 'axios';
import { useEffect, useState } from 'react';
import { X, Volume2 } from 'lucide-react';
import ProgressBar from './ProgressBar';
import PokeIcons from './PokeIcons';
import graDient from './Gradiant';
import getColor from './GetColor';

// Popup shown when a PokemonCard is clicked. Fetches full details for that
// pokemon and renders them the same way PokeBanner does, but as an overlay.
const PokemonModal = ({ pokemonUrl, onClose }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;

    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await axios.get(pokemonUrl);
        const data = response.data;
        if (isCancelled) return;
        setPokemon({
          name: data.name,
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
          voice: data.cries?.latest,
          id: data.id,
        });
      } catch (error) {
        console.log(error);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };

    if (pokemonUrl) fetchPokemon();

    return () => {
      isCancelled = true;
    };
  }, [pokemonUrl]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const cryPlay = () => {
    if (pokemon?.voice) {
      const audio = new Audio(pokemon.voice);
      audio.play();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl ${graDient(pokemon?.type_1)} text-white shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {loading || !pokemon ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-lg animate-pulse">Loading...</p>
          </div>
        ) : (
          <div className="p-6 pt-10">
            <img
              src={pokemon.img}
              alt={pokemon.name}
              className="w-48 mx-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-4"
            />

            <h1 className="text-3xl font-bold text-center capitalize mb-4">{pokemon.name}</h1>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className={`${getColor(pokemon.type_1)} p-2 rounded-full text-black`}>
                <img src={PokeIcons(pokemon.type_1)} alt={pokemon.type_1} className="h-8 w-8" />
              </div>
              {pokemon.type_2 && (
                <div className={`${getColor(pokemon.type_2)} p-2 rounded-full text-black`}>
                  <img src={PokeIcons(pokemon.type_2)} alt={pokemon.type_2} className="h-8 w-8" />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-white/20 py-4 mb-6 text-center">
              <div>
                <p className="text-lg font-semibold">{pokemon.height} Cm</p>
                <p className="text-xs text-white/70 uppercase">Height</p>
              </div>
              <div>
                <p className="text-lg font-semibold">{pokemon.weight} Kg</p>
                <p className="text-xs text-white/70 uppercase">Weight</p>
              </div>
            </div>

            <div className="space-y-3 mb-6 flex flex-col items-center">
              <ProgressBar value={pokemon.hp} />
              <ProgressBar value={pokemon.attack} />
              <ProgressBar value={pokemon.defense} />
              <ProgressBar value={pokemon.specialAttack} />
              <ProgressBar value={pokemon.specialDefense} />
              <ProgressBar value={pokemon.speed} />
            </div>

            {pokemon.voice && (
              <div className="flex justify-center">
                <button
                  onClick={cryPlay}
                  className="bg-[#2b59b2] px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition flex gap-2 items-center cursor-pointer"
                >
                  <Volume2 size={20} /> Play Cry
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonModal;