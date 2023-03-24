import {
    Header,
    IBenefits,
    IProductInfo,
    IThumbnails,
    ProductDetails,
    ProductMedia,
    useParams,
    useProductInfo,
    Spinner
} from "../imports/productInfo";

function ProductInfo() {
    const params = useParams();
    const { slug } = params;

    const { data, isLoading } = useProductInfo(slug as string);

    return (
        <>
            <Header />
            <main className="max-w-container mx-auto px-5 lg:px-0 my-10">
                {isLoading && <Spinner />}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
                    <ProductMedia images={data?.thumbnails as IThumbnails[]} />
                    <ProductDetails
                        name={data?.name as string}
                        price={data?.price as number}
                        overview={data?.overview as string}
                        benefits={data?.benefits as IBenefits[]}
                        productInfo={data?.product_information as IProductInfo}
                    />
                </div>
            </main>
        </>
    );
}

export default ProductInfo;
