import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";

const Selected = ({ selectedPlayers, handleDelete }) => {
    return (
        <div>
            {
                selectedPlayers.map((player) => (
                    <div key={player.id}>
                        <div className='flex w-11/12 mx-auto mb-2 mt-4 justify-between'>
                              <img className='w-1/5 h-36 object-cover' src={player.image} alt="" />
                              <div className='flex flex-col ml-3 font-semibold'>
                              <p>Name: {player.name}</p>
                              <p>Role: {player.role}</p>
                              <p>Price: ${player.price}</p>
                              </div>
                              <div onClick={() => handleDelete(player.id)} className=' text-red-400 btn'>
                              <MdDeleteForever />
                              </div>
                        </div>
                    </div>
                ))
            }
            <button className='btn bg-yellow-400 ml-16 mt-4'>Add More Players</button>
        </div>
    );
};

Selected.propTypes = {
    selectedPlayers: PropTypes.object,
    handleDelete: PropTypes.object
  }

export default Selected;