export interface WishList {
    products: Product[];
}

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    images: string[];
}