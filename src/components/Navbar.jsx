import logo from '../assets/logo.png'
import { BsCoin } from "react-icons/bs";
import PropTypes from 'prop-types';

const Navbar = ({ price }) => {
    return (
        <div className="flex justify-between mx-4 mt-7">
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className="flex gap-5 font-bold">
                <p>Home</p> 
                <p>Fixture</p>
                <p>Teams</p>
                <p>Schedules</p>
                <p className="btn"> {price} coins<span className='text-yellow-400'><BsCoin /></span></p>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    price: PropTypes.object
  }

export default Navbar;