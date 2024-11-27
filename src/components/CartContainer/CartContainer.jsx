import PropTypes from 'prop-types';
import './CartContainer.css'
import Player from '../Player/Player';
import Selected from '../Selected/Selected';
// { productQueue }

const CartContainer = ({ handleIsActiveState, isActive, handleSelectedPlayer, selectedPlayers, handleDelete }) => {
    
    return (
        <div className="">
            <div className='flex justify-end'>
                <div onClick={() => handleIsActiveState("player")} className={`${isActive.player?"btn active":"btn"}`}>Available</div>
                <div onClick={() => handleIsActiveState("selected")} className={`${isActive.player?"btn":"active btn"}`}>Selected : {selectedPlayers.length}
                </div>
                
            </div>

            {isActive.player?<Player handleSelectedPlayer={handleSelectedPlayer}></Player>:<Selected selectedPlayers={selectedPlayers} handleDelete={handleDelete}></Selected>}
            
        </div>
    );
};

CartContainer.propTypes = {
    handleIsActiveState: PropTypes.object,
    isActive: PropTypes.object,
    handleSelectedPlayer: PropTypes.object,
    selectedPlayers: PropTypes.object,
    handleDelete: PropTypes.object
  }

export default CartContainer;






