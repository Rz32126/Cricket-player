import logo from '../assets/logo-footer.png'

const Footer = () => {
    return (
        <div className='mx-4 rounded-lg'>
            <div className='flex justify-center bg-black'>
              <img className="mt-14" src={logo} alt="" />
            </div>

            <footer className="footer bg-black text-white p-10">

  <nav>
    <h6 className="footer-title">About us</h6>
    <p className="link link-hover">We are a passionate team dedicated to providing<br></br>the best services to our customers.</p>

  </nav>
  <nav>
    <h6 className="footer-title">Quick Links</h6>
    <a className="link link-hover">. Home</a>
    <a className="link link-hover">. Services</a>
    <a className="link link-hover">. About</a>
    <a className="link link-hover">. Contact</a>
  </nav>
  <form>
    <h6 className="footer-title">Subscribe</h6>
    <fieldset className="form-control w-80">
      
      <div className="join">
        <input
          type="text"
          placeholder="Enter your email"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item bg-orange-300 text-black">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;