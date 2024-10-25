import banner from '../../assets/banner-main.png'
// import background from '../../assets/bg-shadow.png'

const Header = () => {
    return (
        <div className='text-center bg-slate-950 mx-4 rounded-xl mt-5'>
            <div className='flex justify-center mt-4'>
              <img className='' src={banner} alt=''/>
            </div>
            <h1 className='font-bold text-4xl text-white mt-3'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='font-semibold text-xl text-white my-4'>Beyond Boundaries Beyond Limits</p>
            <div className='border-2 border-yellow-400 btn rounded-2xl bg-black h-16 mb-2 mt-2 px-2'>
               <button className='btn bg-yellow-400 rounded-xl'>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Header;