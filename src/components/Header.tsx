import {
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import React from "react";
import SearchBar from "./SearchBar";

import { Link as ReachLink } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}

const Header = ({ onSearch }: Props) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <Box p="10">
        <Link as={ReachLink} to="/" size="md">
          Ecommerce Website
        </Link>
      </Box>
      <SearchBar onSearch={onSearch}></SearchBar>
      <Link as={ReachLink} to="/signup" margin="10px" whiteSpace="nowrap">
        Sign Up
      </Link>
      <Link as={ReachLink} to="/login" margin="10px" whiteSpace="nowrap">
        Log in
      </Link>
      <Spacer />
    </Flex>
  );
};

export default Header;
