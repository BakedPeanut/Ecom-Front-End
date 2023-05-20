import { Link } from "react-router-dom";
import useBrand, { Brand } from "../hooks/useBrand";
import { HStack, List, ListItem, Image, Button } from "@chakra-ui/react";

interface Props {
  selectedBrand: Brand | null;
  onSelectedBrand: (brand: Brand | null) => void;
}

const BrandList = ({ selectedBrand, onSelectedBrand }: Props) => {
  const { data } = useBrand();

  const brands = [
    {
      id: 1,
      name: "All Products",
      logo: "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
    },
    {
      id: 2,
      name: "Apple",
      logo: "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
    },
    {
      id: 3,
      name: "Samsung",
      logo: "https://w7.pngwing.com/pngs/703/528/png-transparent-samsung-logo-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-company-text-label.png",
    },
    {
      id: 4,
      name: "Vivo",
      logo: "https://w7.pngwing.com/pngs/703/528/png-transparent-samsung-logo-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-company-text-label.png",
    },
    {
      id: 5,
      name: "Oppo",
      logo: "https://w7.pngwing.com/pngs/703/528/png-transparent-samsung-logo-samsung-galaxy-a8-2018-logo-samsung-electronics-arrow-sketch-company-text-label.png",
    },
  ];

  return (
    <List>
      {/* <ListItem>
        <Button
          onClick={() => onSelectedBrand(null)}
          fontSize="lg"
          variant="link"
        >
          All Products
        </Button>
      </ListItem> */}
      {brands.map((brand) => (
        <ListItem key={brand.id} paddingY="5px">
          {" "}
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={brand.logo}
              margin="15px"
            ></Image>
            <Button
              onClick={() => onSelectedBrand(brand)}
              fontSize="lg"
              variant="link"
              fontWeight={brand.id === selectedBrand?.id ? "bold" : "normal"}
            >
              {brand.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default BrandList;
