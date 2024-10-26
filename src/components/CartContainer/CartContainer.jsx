

const CartContainer = ({ productQueue }) => {
    return (
        <div className="flex">
            <div className="btn">Available</div>
            <div className="btn">Selected:{productQueue.length}
                <div className="">

                </div>
            </div>
        </div>
    );
};

export default CartContainer;