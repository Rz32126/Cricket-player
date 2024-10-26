import { useEffect } from "react";
import { useState } from "react";
// import Player from "../Player/Player";


const AvailablePlayer = ({ addProductQueue }) => {
    const [products, setPlayers] = useState([]);

    useEffect( () => {
        fetch('./main.json')
        .then(res => res.json())
        .then(data => setPlayers(data.products))
        
    }, [])

    return (
        <div>
            <h2 className="btn mx-4">Available Players{products.length}</h2>

          <div className="grid grid-cols-3 mt-7 gap-4 w-full mx-28">
            {products.map(product => (
                <div key={product.id} className="card bg-base-100">
                <figure>
                  <img className="h-48 border w-full object-cover mx-2 rounded-md mt-3"
                    src={product.image}
                    alt="player image" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>Country : {product.country}</p>
                  <div className="border"></div>
                  <p>Rating : {product.rating}</p>
                  <p>Role : {product.role}</p>
                  <p>Price : $ {product.price}</p>

                  <div className="card-actions justify-center">
                    <button onClick={()=>addProductQueue(product)} className="btn">Choose Player</button>
                  </div>
                </div>
              </div>
            ))}
                
            </div> 
         

            
            
        </div>
    );
};

export default AvailablePlayer;