import { useParams } from "react-router-dom";

import { ProductDetails } from "../components/ProductDetails";
import { ProductMedia } from "../components/ProductMedia";
import { useProductInfo } from "../hooks/useProductInfo";
import { IBenefits, IProductInfo, ISizes, IThumbnails } from "../interfaces/IProducts";

import { Spinner } from "../components/Spinner";

export { ProductDetails, ProductMedia, useParams, useProductInfo, Spinner };
export type { IBenefits, IProductInfo, ISizes, IThumbnails };
