import { Link } from "react-router-dom";

function Notfound() {
    return (
        <div className="w-full h-screen grid place-items-center">
            <div className="">
                <h3 className="text-3xl mt-5 font-semibold">Not Found😔😔</h3>
                <Link className="text-2xl mt-5 underline inline-block" to="/shoes">
                    Go back to home
                </Link>
            </div>
        </div>
    );
}

export default Notfound;
