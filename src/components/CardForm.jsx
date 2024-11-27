

const CardForm = () => {
    return (
        <div className="bg-orange-300 mx-20 rounded-lg h-64 relative top-24 border-2 border-yellow-400 px-2 py-7">
           <p className="font-bold text-2xl text-center ">Subscribe to our Newsletter</p>
            
            <p className="text-center mt-9">Get the latest updates and news right in your inbox!</p>
            <div className="mx-96 mt-4">
               <input
               type="text"
               placeholder="Enter your email"
               className="input input-bordered mx-5" />
              <button className="btn btn-primary bg-orange-300 text-black">Subscribe</button>
            </div>
        </div>
    );
};

export default CardForm;