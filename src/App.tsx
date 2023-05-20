import { Grid, GridItem, Text } from "@chakra-ui/react";
import ProductGrid from "./components/ProductGrid";
import Header from "./components/Header";
import BrandList from "./components/BrandList";
import { useState } from "react";
import { Brand } from "./hooks/useBrand";
import SortSelecter from "./components/SortSelecter";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ProductDetails from "./components/ProductDetails";
import { Product } from "./hooks/useProduct";

export interface ProductQuery {
  brand: Brand | null;
  sortOrder: string;
  searchText: string;
  //view: Product | null;
}

function App() {
  const [productQuery, setProductQuery] = useState<ProductQuery>(
    {} as ProductQuery
  );

  return (
    <Grid templateAreas={`"nav nav" "aside main"`}>
      <GridItem area="nav">
        {/* <NavBar></NavBar> */}
        <Header
          onSearch={(searchText) =>
            setProductQuery({ ...productQuery, searchText })
          }
        ></Header>
      </GridItem>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <GridItem area="aside" width="80px" paddingX={5}>
                <BrandList
                  selectedBrand={productQuery.brand}
                  onSelectedBrand={(brand) =>
                    setProductQuery({ ...productQuery, brand })
                  }
                ></BrandList>
              </GridItem>
              <GridItem area="main">
                <SortSelecter
                  sortOrder={productQuery.sortOrder}
                  onSelectSortOrder={(sortOrder) =>
                    setProductQuery({ ...productQuery, sortOrder })
                  }
                ></SortSelecter>
                <ProductGrid productQuery={productQuery}></ProductGrid>
                <Text> Selected Brand: {productQuery?.brand?.name}</Text>
              </GridItem>
            </>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <GridItem marginLeft="350px">
              <SignUp></SignUp>
            </GridItem>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <GridItem marginLeft="350px">
              <SignIn></SignIn>
            </GridItem>
          }
        ></Route>
      </Routes>
    </Grid>
  );
}

export default App;
