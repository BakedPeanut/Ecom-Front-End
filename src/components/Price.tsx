import { Badge } from "@chakra-ui/react";

interface Props {
  price: number;
}
const Price = ({ price }: Props) => {
  return (
    <Badge colorScheme="blue" fontSize="14px">
      {price}
    </Badge>
  );
};

export default Price;
