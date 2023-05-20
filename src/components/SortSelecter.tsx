import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

import React from "react";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelecter = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "none", label: "None" },
    { value: "low", label: "Low to High" },
    { value: "high", label: "High to Low" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} marginLeft="110px" marginBottom="25px">
        Order by: {currentSortOrder?.label || "None"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelecter;
