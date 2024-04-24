export interface StoreSliderState {
    products: ProductsList;
    wishList: ProductsList;
}

export interface ProductsList {
    isLoading: boolean;
    status: string;
    values: Product[];
}

export interface Product {
    _id: number,
    category: string,
    title: string,
    old_price: string,
    discount: string,
    price: string,
    popularity: number,
    images: string[];
}