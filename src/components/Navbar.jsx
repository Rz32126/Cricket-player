import logo from '../assets/logo.png'

const Navbar = () => {
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
                <p className="btn">0 coins</p>
            </div>
        </div>
    );
};

export default Navbar;