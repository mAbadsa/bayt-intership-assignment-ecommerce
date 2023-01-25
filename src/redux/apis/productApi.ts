import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Products } from "../slices/type";

// interface ListResponse<T> {
//   page: number;
//   per_page: number;
//   total: number;
//   total_pages: number;
//   data: T[];
// }

const productsApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1/" }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Products, object | void>({
      query: ({
        offset = 0,
        limit = 6,
        categoryId = 0,
      }: {
        offset: number;
        limit: number;
        categoryId: number;
      }) => `products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`,
      providesTags: ["product"],
    }),
    getAllProducts: builder.query<Products, number | void>({
      query: () => `products`,
      providesTags: ["product"],
    }),
    getFilteredProductsByCategory: builder.query<Products, number | void>({
      query: (offset = 0, limit = 6, categoryId = 1) =>
        `products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`,
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetAllProductsQuery,
  useGetFilteredProductsByCategoryQuery,
} = productsApi;
export { productsApi };

