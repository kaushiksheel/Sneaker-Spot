import {
    Bars3Icon,
    NavLink,
    SearchBox,
    WishlistlengthSelector,
    cartLengthSelector,
    navLinks,
    useCurrentUser,
    useLocation,
    useRecoilValue
} from "../imports/header";

export const Header = () => {
    const { pathname } = useLocation();

    const { user } = useCurrentUser();
    const cartLength = useRecoilValue(cartLengthSelector);
    const wishlistLength = useRecoilValue(WishlistlengthSelector);

    const handleLogout = () => {
        localStorage.removeItem("token");
    };

    const toggleNav = () => {
        const navbar = document.querySelector(".navbar");
        navbar?.classList.toggle("hidden");
    };

    return (
        <header data-testid="header" className="border  bg-white sticky top-0 h-fit z-20">
            <nav className="max-w-container mx-auto py-6 flex items-center justify-between px-5 lg:px-0 flex-wrap ">
                <div className="flex items-center space-x-4">
                    <NavLink to="/shoes" className="text-3xl font-semibold">
                        SneakerSpot
                    </NavLink>

                    <SearchBox />
                </div>
                <button onClick={toggleNav}>
                    <Bars3Icon width={24} height={24} className="md:hidden cursor-pointer " />
                </button>
                <ul
                    data-testid="menu"
                    className=" navbar hidden  items-center md:space-x-7  md:flex flex-col md:flex-row w-full  space-y-6 md:w-auto md:space-y-0 mt-5 md:mt-0 ">
                    {navLinks.map(({ IconName, id, path, title }) => (
                        <li key={id} className="relative">
                            <NavLink
                                to={path}
                                className="text-2xl font-medium text-gray-400 hover:text-black flex items-center space-x-2">
                                <IconName width={24} height={24} color="black" />
                                <span className={`${path === pathname && "text-black"}`}>
                                    {title}
                                </span>
                            </NavLink>
                            {title == "Cart" && cartLength > 0 && (
                                <span className="absolute w-[20px] h-[20px] bg-red-500 text-white rounded-full grid place-content-center -top-3 left-5">
                                    {cartLength}
                                </span>
                            )}
                            {title == "Wishlist" && wishlistLength > 0 && (
                                <span className="absolute w-[20px] h-[20px] bg-red-500 text-white rounded-full grid place-content-center -top-3 left-5">
                                    {wishlistLength}
                                </span>
                            )}
                        </li>
                    ))}

                    <li>
                        {user ? (
                            <NavLink
                                data-testid="logout-btn"
                                className="text-2xl font-medium border border-black rounded-xl px-11 py-3 hover:bg-black hover:text-white transition-all ease-in-out"
                                to="/"
                                onClick={handleLogout}>
                                Logout
                            </NavLink>
                        ) : (
                            <NavLink
                                className="text-2xl font-medium border border-black rounded-xl px-11 py-3 hover:bg-black hover:text-white transition-all ease-in-out"
                                to="/">
                                Login
                            </NavLink>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
};
