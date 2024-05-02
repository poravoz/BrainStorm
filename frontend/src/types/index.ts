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

export interface WishList {
    products: Product[];
}

export interface ShoppingCartItem{
    product: Product;
    count: number;
}

export interface ShoppingCart{
    products: ShoppingCartItem[];
    totalPrice: number;
}