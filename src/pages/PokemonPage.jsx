import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import PokemonDetail from '../components/PokemonDetail'

function PokemonPage() {
    const { PokeName } = useParams()

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${PokeName}`)
    const [pokemon, setPokemon] = useState()

    const [isLoading, setIsLoading] = useState(false)

    // function petch pokemon
    const funPoke = async() => {
        try {
            const res = await axios.get(url)

            setPokemon(res.data)
            setIsLoading(true)
        } catch (err) {
            console.error(err);
        }
    }
      
    useEffect(() => {
        // get data pokemons
        funPoke()
    }, [])

    return (
        <div>
            {
            isLoading ? (
                <PokemonDetail name={pokemon.name} images={pokemon.sprites} id={pokemon.id} stats={pokemon.stats} types={pokemon.types} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default PokemonPage