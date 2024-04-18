import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../components/ShowPoke.css'

function CardPoke({ imgUrl, name, id, types}) {
  const navigate = useNavigate()

  const handleClickOnCardElement = () => {
    navigate(`/pokemon/${name}`);
  }

  return (
    <>
        <div className='poke-card' onClick={handleClickOnCardElement}>
            <img src={imgUrl}/>
            <h3 className='name'>{name}</h3>
            <h3 className='id'>{`#${id}`}</h3>

            <div className='type-container'>
              {types.map((slot, index) => {
                let isType = slot.type.name
                return(
                  <div className={`type-box ${isType}`} key={index}>{isType}</div>
                )
              })}
            </div>
        </div>
    </>
  )
}

function ShowPoke({ allPokemon, searchBarValue }) {
  // type and number ex. of check type of in input value
  const [types] = useState(['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'])
  const [numbers] = useState(['1', '2','3', '4', '5'])
  
  return (
    <div className='container-show-poke'>
      {
        allPokemon.map((poke, index) => {
          let filterType = false
          let filterId = false
          let filterName = false

          if (searchBarValue != undefined) {
            // if input value is type of pokemon
            types.filter(type => {
              if (type == searchBarValue) filterType = type
            })

            // if input value is number
            let inputArray = searchBarValue.split('')
            inputArray.filter(letter => numbers.filter(num => {
              if (letter === num) filterId = true
            }))

            // check input value is name pokemon
            if (!filterType || !filterId) filterName = true
          }
            
          let isFinding = true
          // filter before return pokemon card to screen
          if (filterType) {
            isFinding = false
            poke.types.map(slot => {
              if (slot.type.name == filterType) isFinding = true 
            })
          } else if (filterId) {
            isFinding = false
            if (poke.id == searchBarValue) isFinding = true
          } else if (filterName) {
            isFinding = false
            if (poke.name.includes(searchBarValue.toLowerCase())) isFinding = true
          }

          if (isFinding) {
            return (
              <CardPoke imgUrl={poke.sprites.front_default} name={poke.name} id={poke.id} types={poke.types} key={index}/>
            )
          }
        })
      }
    </div>
  )
}

export default ShowPoke