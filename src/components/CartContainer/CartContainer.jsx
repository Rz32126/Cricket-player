import PropTypes from 'prop-types';
import './CartContainer.css'
import Player from '../Player/Player';
import Selected from '../Selected/Selected';
// { productQueue }

const CartContainer = ({ handleIsActiveState, isActive, }) => {
    
    return (
        <div className="">
            <div className='flex justify-end'>
                <div onClick={() => handleIsActiveState("player")} className={`${isActive.player?"btn active":"btn"}`}>Available</div>
                <div onClick={() => handleIsActiveState("selected")} className={`${isActive.player?"btn":"active btn"}`}>Selected
                </div>
                
            </div>

            {isActive.player?<Player></Player>:<Selected></Selected>}
            {/* <div className="btn">Available</div>
            <div className="btn">Selected:{productQueue.length}
            {
                productQueue.map(player => <Player key={player.id} player={player}></Player>)
            }
            </div> */}
        </div>
    );
};

CartContainer.propTypes = {
    handleIsActiveState: PropTypes.object,
    isActive: PropTypes.object,
    addProductQueue: PropTypes.object
  }

export default CartContainer;






