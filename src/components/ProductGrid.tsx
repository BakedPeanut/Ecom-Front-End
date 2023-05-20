import { SimpleGrid, Text } from "@chakra-ui/react";
import useProduct, { Product } from "../hooks/useProduct";
import ProductCard from "./ProductCard";
import { Brand } from "../hooks/useBrand";
import { ProductQuery } from "../App";

interface Props {
  productQuery: ProductQuery;
  // selectedProduct: Product | null;
  // onSelectedProduct: (product: Product | null) => void;
}

const ProductGrid = ({ productQuery }: Props) => {
  const { data, error } = useProduct(productQuery);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={5} padding="10px" spacing={10} marginLeft="100px">
        {data.map((data) => (
          <ProductCard
            key={data.productID}
            product={data}
            // selectedProduct={data}
            // onSelectedProduct={() => onSelectedProduct(data)}
          ></ProductCard>
        ))}
        <Text> Selected Brand: {productQuery.brand?.name}</Text>
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
