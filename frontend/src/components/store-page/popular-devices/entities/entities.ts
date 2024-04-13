export interface WishList {
    products: Product[];
}

export interface Product {
    _id: number;
    name: string;
    category: string;
    price: number;
    images: string[];
}