export interface WishList {
    products: Product[];
}

export interface Product {
    id: number;
    category: string;
    title: string;
    old_price: string;
    discount: string;
    price: string;
    popularity: number;
    images: string[];
}