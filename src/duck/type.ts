export interface AppState<T> {
    loading: boolean;
    data: T[] | null;
    error: any;
};

export interface Action {
    type: string;
    payload: any;
};

export interface Product {
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
}