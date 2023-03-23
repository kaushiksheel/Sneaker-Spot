export interface IThumbnails {
    id: number;
    img: string;
}

export interface ISizes {
    id: number;
    size: string;
    is_available: boolean;
}
export interface IBenefits {
    id: number;
    text: string;
}

export interface IProductInfo {
    text: string;
}
export interface IProducts {
    name: string;
    benefits: IBenefits[];
    color: string;
    id: number;
    img: string;
    slug: string;
    overview: string;
    price: number;
    product_information: IProductInfo;
    quantity: number;
    sizes: ISizes[];
    thumbnails: IThumbnails[];
}
