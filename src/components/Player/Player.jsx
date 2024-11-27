import './Player.css'
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";



const Player = ({ handleSelectedPlayer }) => {
  
    const [products, setPlayers] = useState([]);

    useEffect( () => {
      fetch('./main.json')
      .then(res => res.json())
      .then(data => setPlayers(data.products))
      
  }, [])

    
    return (
      <div>
      <h2 className="font-bold text-xl ml-12">Available Players</h2>

    <div className="grid lg:grid-cols-3 grid-cols-1 mt-7 gap-4 w-11/12 mx-auto">
      {products.map(product => (
          <div key={product.id} className="card bg-base-100">
          <figure>
            <img className="h-48 border w-full object-cover mx-2 rounded-md mt-3"
              src={product.image}
              alt="player image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"><IoPersonCircleSharp />{product.name}</h2>
            <p className="flex gap-3 font-semibold">Country : <FaFlag /> {product.country}</p>
            <div className="border"></div>
            <p className="font-semibold">Rating : {product.rating}</p>
            <p className="font-semibold">Role : {product.role}</p>
            <p className="font-semibold">Price : $ {product.price}</p>

            <div className="card-actions justify-center">
              <button onClick={()=>handleSelectedPlayer(product)} className="btn bg-yellow-200">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
          
      </div> 
   

      
      
  </div>
    );
};

Player.propTypes = {
  handleSelectedPlayer: PropTypes.object
}

export default Player;



