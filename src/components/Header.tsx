import { navLinks } from "../data/navLinks";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useCurrentUser } from "../hooks/useCurrentUser";

export const Header = () => {
    const { pathname } = useLocation();

    const { user } = useCurrentUser();

    const handleLogout = () => {
        localStorage.removeItem("token");
    };

    return (
        <header className="border  bg-white sticky top-0 h-fit z-20">
            <nav className="max-w-container mx-auto py-6 flex items-center justify-between px-5 lg:px-0 flex-wrap">
                <Link to="/" className="text-3xl font-semibold">
                    SneakerSpot
                </Link>
                <ul className=" items-center space-x-7 hidden md:flex">
                    {navLinks.map(({ id, path, title }) => (
                        <li key={id} className="  ">
                            <Link
                                to={path}
                                className={`text-2xl font-medium ${
                                    pathname === path
                                        ? "text-black"
                                        : "text-gray-400 hover:text-black "
                                }`}>
                                {title}
                            </Link>
                        </li>
                    ))}
                    <li>
                        {user ? (
                            <Link
                                className="text-2xl font-medium border border-black rounded-xl px-11 py-3 hover:bg-black hover:text-white transition-all ease-in-out"
                                to="/login"
                                onClick={handleLogout}>
                                Logout
                            </Link>
                        ) : (
                            <Link
                                className="text-2xl font-medium border border-black rounded-xl px-11 py-3 hover:bg-black hover:text-white transition-all ease-in-out"
                                to="/login">
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
                <Bars3Icon width={24} height={24} className="md:hidden cursor-pointer" />
            </nav>
        </header>
    );
};
