import { useState } from 'react'
import './PokemonDetail.css'

// icons
import { FaArrowLeft } from "react-icons/fa6";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function PokemonDetail({ name, images, id, stats, types }) {
    // console.log(name, images, id, stats, types);
    
    // image
    const [allImage] = useState([
        images["front_default"],
        images["back_default"],
        images["front_shiny"],
        images["back_shiny"],
    ])

    const [imageIndex, setImageIndex] = useState(0)

    const increaseImageIndex = () => {
        if (imageIndex < allImage.length - 1) {
          setImageIndex(prevIndex => prevIndex + 1);
        }
    };

    const decreaseImageIndex = () => {
        if (imageIndex > 0) {
          setImageIndex(prevIndex => prevIndex - 1);
        }
    };
    
    return(
        <div className='pokemon-detail-container'>
            <div className='name-id-pokemon'>
                <FaArrowLeft className='icon-arrow-left'/>
                <h3>{name}</h3>
                <h5>{`#${id}`}</h5>
            </div>

            <div className="image-container">
                <FaAngleLeft className='arrow' onClick={decreaseImageIndex}/>
                <img src={allImage[imageIndex]}/>
                <FaAngleRight className='arrow'onClick={increaseImageIndex}/>
            </div>

            <div className='stats-container'>
                {stats.map(slot => {
                    let value = slot.base_stat
                    let name = slot.stat.name

                    return(
                        <div className='stats-bar'>
                            <span className='name'>{name}</span>
                            <span className='value'>{value}</span>
                            <div className="bar">
                                <div className="value"></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* {stats.map(state => {
                return(
                    <p>{state}</p>
                )
            })} */}

            {/* {types.map(slot => {
                return(
                    <p>{slot.type.name}</p>
                )
            })} */}
        </div>
    )
}

export default PokemonDetail