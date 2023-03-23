export const CartHeader = () => {
    return (
        <div>
            <h1 className="font-bold text-4xl">Your Cart</h1>
            <div className="uppercase flex justify-between items-center font-semibold text-gray-400 text-xl tracking-wider mt-10">
                <p>product</p>
                <div className="flex items-center space-x-11 mr-11">
                    <p>quantity</p>
                    <p>price</p>
                </div>
            </div>
        </div>
    );
};
