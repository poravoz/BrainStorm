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
  