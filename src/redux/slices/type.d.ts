export type Products = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
};

export interface ProductsState {
  productsCount: number;
  products: Products[];
  productsOffset: number;
  categoryId: number;
  sortBy: string;
}

