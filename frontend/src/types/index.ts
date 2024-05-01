export type ProductItem = {
    title: string,
    category: string,
    price: number,
    image: string;
}
  
export interface ShoppingCartLine {
    product: ProductItem;
    count: number;
}
  
export interface AppState {
    catalog: ProductItem[];
    shoppingCart: ShoppingCartLine[];
    totalPrice: number;
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