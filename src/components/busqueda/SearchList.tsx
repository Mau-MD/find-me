import {
  Card,
  Group,
  Avatar,
  Stack,
  Title,
  Badge,
  Button,
  Text,
} from "@mantine/core";
import React from "react";
import SearchCard from "./SearchCard";
import SearchFilters from "./SearchFilters";

const SearchList = () => {
  return (
    <Stack>
      <SearchFilters />
      <SearchCard
        ownerName="Paola Legaspy"
        dogName="Feredico"
        reward={200}
        dateLost={"ayer"}
      />
      <SearchCard
        ownerName="Paola Legaspy"
        dogName="Feredico"
        reward={200}
        dateLost={"ayer"}
      />
      <SearchCard
        ownerName="Paola Legaspy"
        dogName="Feredico"
        reward={200}
        dateLost={"ayer"}
      />
    </Stack>
  );
};

export default SearchList;
