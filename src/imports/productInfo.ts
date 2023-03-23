import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { ProductDetails } from "../components/ProductDetails";
import { ProductMedia } from "../components/ProductMedia";
import { useProductInfo } from "../hooks/useProductInfo";
import { IBenefits, IProductInfo, ISizes, IThumbnails } from "../interfaces/IProducts";

export { Header, ProductDetails, ProductMedia, useParams, useProductInfo };
export type { IBenefits, IProductInfo, ISizes, IThumbnails };
