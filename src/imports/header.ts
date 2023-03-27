import { NavLink, useLocation } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { SearchBox } from "../components/SearchBox";
import { useRecoilValue } from "recoil";
import { cartLengthSelector } from "../recoil/selectors/cartSelector";
import { wishlistLength as WishlistlengthSelector } from "../imports/wishlist";
import { navLinks } from "../data/navLinks";

export {
    Bars3Icon,
    NavLink,
    SearchBox,
    WishlistlengthSelector,
    cartLengthSelector,
    navLinks,
    useCurrentUser,
    useLocation,
    useRecoilValue
};
