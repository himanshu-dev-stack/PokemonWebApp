import { useEffect, useState } from "react"
import PokemonCard from "../Components/PokemonCard"
import axios from "axios";
import PokeBanner from "../Components/PokeBanner";
import PokemonModal from "../Components/PokemonModal";
import { useSearch } from "../Context/SearchContext";

function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);

    const { searchTerm, selectedCategory } = useSearch();

    const HandlePervPokemon = () => {
        if (offset > 0) {
            setOffset(offset - 20);
        }
        else {
            setOffset(0);
        }
    }

    const HandleNextPokemon = () => {
        setOffset(offset + 20);
    }

    const getPokemonList = async () => {
        try {
            if (selectedCategory && selectedCategory !== "All") {
                // Pull the list of pokemon belonging to the chosen type
                const response = await axios.get(`https://pokeapi.co/api/v2/type/${selectedCategory.toLowerCase()}`);
                const data = await response.data;
                // { pokemon: [{ pokemon: { name, url } }] } -> flatten, cap for perf
                const results = data.pokemon.slice(0, 40).map((p) => p.pokemon);
                setPokemonList(results);
            } else {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
                const data = await response.data;
                setPokemonList(data.results);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPokemonList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset, selectedCategory]);

    // Filter the currently loaded list by the search box text
    const filteredPokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );

    const isCategoryFiltered = selectedCategory && selectedCategory !== "All";

    return (

        <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
            {/* Banner Random generated Pokemon */}

            <PokeBanner />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 max-sm:grid-cols-1 p-3 ">
                {filteredPokemonList.map((pokemon, index) => (
                    <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => setSelectedPokemonUrl(pokemon.url)}
                    >
                        <PokemonCard pokemonName={pokemon.name} pokemonUrl={pokemon.url} offset={offset} />
                    </div>
                ))}
                {filteredPokemonList.length === 0 && (
                    <p className="col-span-full text-center text-gray-500 dark:text-gray-400 py-8">
                        No Pokemon found{searchTerm ? ` for "${searchTerm}"` : ""}.
                    </p>
                )}
            </div>

            {/* Pagination doesn't apply when filtering by type, since that pulls a fixed list */}
            {!isCategoryFiltered && (
                <div className="w-full p-4 flex justify-between items-center">
                    <button className="px-6 py-2 rounded-full text-center text-white bg-slate-900 dark:bg-yellow-500 dark:text-black cursor-pointer" onClick={HandlePervPokemon}>preview</button>
                    <button className="px-6 py-2 rounded-full text-center text-white bg-slate-900 dark:bg-yellow-500 dark:text-black cursor-pointer" onClick={HandleNextPokemon}>next</button>
                </div>
            )}

            {selectedPokemonUrl && (
                <PokemonModal
                    pokemonUrl={selectedPokemonUrl}
                    onClose={() => setSelectedPokemonUrl(null)}
                />
            )}
        </div>
    )
}

export default PokemonList