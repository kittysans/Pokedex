import { useState, useEffect } from 'react'
import axios from 'axios';

// // components
import Navbar from '../components/Navbar'
import SearchPoke from '../components/SearchPoke'
import ShowPoke from '../components/ShowPoke';

function Home() {
    // url
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
    const [nextUrl, setNextUrl] = useState()

    // pokemon
    const [allPokemon, setAllPokemon] = useState([])

    // search bar
    const [searchBarValue, setSearchBarValue] = useState()

    // function petch pokemon
    const funPoke = async() => {
        try {
            const res = await axios.get(url)
            setNextUrl(res.data.next);
            getPokes(res.data.results)
        } catch (err) {
            console.error(err);
        }
    }

    const getPokes = async(res) => {
        res.map(async(poke) => {
        const pokeInfo = await axios.get(poke.url)
        setAllPokemon(state => {
          state = [...state, pokeInfo.data]
          return state
        })
      })
    }
      
    useEffect(() => {
        // get data pokemons
        funPoke()
    }, [])

    return (
        <>
            <Navbar/>
            <SearchPoke setSearchBarValue={setSearchBarValue}/>
            <ShowPoke allPokemon={allPokemon} searchBarValue={searchBarValue}/>
        </>
    )
}

export default Home


// import { createContext, useEffect, useState } from 'react'
// import './App.css'

// // components
// import Navbar from './components/Navbar'
// import SearchPoke from './components/SearchPoke'
// import ShowPoke from './components/ShowPoke'
// import axios from 'axios';

// // context
// export const pokeContext = createContext();

// function App() {
//   const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
//   const [pokes, setPokes] = useState([])
//   const [inputValue, setInputValue] = useState()
//   const [selectTypes, setSelectTypes] = useState([])

//   const funPoke = async() => {
//     try {
//       const res = await axios.get(url)

//       // setPokes(res.data.results)
//       setUrl(res.data.next)

//       getPokes(res.data.results)
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   const getPokes = async(res) => {
//     res.map(async(poke) => {
//       const pokeInfo = await axios.get(poke.url)
//       setPokes(state => {
//         state = [...state, pokeInfo.data]
//         return state
//       })
//     })
//   }

//   useEffect(() => {
//     // get data pokemons
//     funPoke()
//   }, [])
//   return (
//     <>
//     <pokeContext.Provider value={{ pokes, inputValue, selectTypes }}>
//       <Navbar/>
//       <SearchPoke setInputValue={setInputValue} setSelectTypes={setSelectTypes}/>
//       <ShowPoke pokes={{pokes}}/>
//     </pokeContext.Provider>
//     </>
//   )
// }

// export default App