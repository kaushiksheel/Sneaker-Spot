import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { DropDown } from "../components/DropDown";
import { Header } from "../components/Header";
import { ShoeCard } from "../components/ShoeCard";
import { ShoeCardSkeleton } from "../components/ShoeCardSkeleton";
import { sortOptions } from "../data/options";
import { useProducts } from "../hooks/useProducts";
import { IOptions } from "../interfaces/IOptons";
import { IProducts } from "../interfaces/IProducts";
import { productsState } from "../recoil/atoms/productAtom";

export {
    DropDown,
    Header,
    ShoeCard,
    ShoeCardSkeleton,
    productsState,
    sortOptions,
    useEffect,
    useProducts,
    useRecoilState,
    useState
};
export type { IOptions, IProducts };
