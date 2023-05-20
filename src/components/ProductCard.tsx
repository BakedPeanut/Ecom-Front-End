import React from "react";
import { Product } from "../hooks/useProduct";
import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import Price from "./Price";
import { AddIcon } from "@chakra-ui/icons";

interface Props {
  product: Product;
  // selectedProduct: Product | null;
  // onSelectedProduct: (product: Product | null) => void;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" bg="gray.200" width="200px">
      <Image src={product.background} />
      <CardBody>
        <Heading fontSize="2xl">{product.name}</Heading>
        <HStack justifyContent="space-between" marginBottom={3}></HStack>
        <IconButton
          onClick={() => console.log("Clicked")}
          fontSize="lg"
          marginRight="10px"
          bg="gray.400"
          aria-label="Add to Cart"
          icon={<AddIcon></AddIcon>}
        >
          {" "}
        </IconButton>
        <Price price={product.price}></Price>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
