import { HeartIcon, HomeIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";

export const navLinks = [
    {
        id: 1,
        title: "Home",
        path: "/shoes",
        IconName: HomeIcon
    },
    {
        id: 3,
        title: "Cart",
        path: "/cart",
        IconName: ShoppingBagIcon
    },
    {
        id: 2,
        title: "Wishlist",
        path: "/wishlist",
        IconName: HeartIcon
    }
];
