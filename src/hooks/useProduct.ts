import { ProductQuery } from "../App";
import { Brand } from "./useBrand";
import useData from "./useData";

export interface Product {
  productID: number;
  name: string;
  background: string;
  price: number;
  brandId: number;
}

const useProduct = (productQuery: ProductQuery) =>
  useData<Product>(
    "/api/product",
    {
      params: {
        brands: productQuery.brand?.id,
        ordering: productQuery.sortOrder,
        search: productQuery.searchText,
        //view: productQuery.view?.productID,
      },
    },
    [productQuery]
  );

export default useProduct;
