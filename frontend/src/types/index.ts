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

export interface ProductList {
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

export interface Customer{
    name: string;
    lastname: string;
    phone: string;
    email: string;
}

export interface Order{
    id: number;
    customer: Customer;
    products: ShoppingCart;
    delivery: string;
    payPrice: number;
    date: string;
}

export interface OrderList{
    orders: Order[];
}

export interface SearchState{
    data: Product[];
    searchResults: Product[];
}