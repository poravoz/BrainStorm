export interface IWishListState {
    products: Product[];

};

export interface Product {
    _id: number;
    name: string;
    category: string;
    discount: number;
}