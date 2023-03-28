import animationData from "../assets/animations/NotFound.json";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { LottieAnimation } from "../lib/LottieAnimation";

function Notfound() {
    const options = LottieAnimation(animationData);
    return (
        <div className="w-full grid place-items-center">
            <Lottie options={options} height={400} width={400} />
            <h3 className="text-3xl mt-5 font-semibold">Not Found</h3>
            <Link className="text-2xl mt-5 underline" to="/shoes">
                Go back to home
            </Link>
        </div>
    );
}

export default Notfound;
