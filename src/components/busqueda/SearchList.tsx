import {
  Card,
  Group,
  Avatar,
  Stack,
  Title,
  Badge,
  Button,
  Text,
  Paper,
  ScrollArea,
} from "@mantine/core";
import React from "react";
import SearchCard from "./SearchCard";
import SearchFilters from "./SearchFilters";

const SearchList = () => {
  return (
    <ScrollArea style={{ height: "50vh" }}>
      <Stack style={{ overflowY: "scroll" }}>
        <SearchCard
          ownerName="Paola Legaspy"
          dogName="Feredico"
          reward={true}
          dateLost={"ayer"}
        />
        <SearchCard
          ownerName="Paola Legaspy"
          dogName="Feredico"
          reward={false}
          dateLost={"ayer"}
        />
        <SearchCard
          ownerName="Paola Legaspy"
          dogName="Feredico"
          reward={true}
          dateLost={"ayer"}
        />
        <SearchCard
          ownerName="Paola Legaspy"
          dogName="Feredico"
          reward={true}
          dateLost={"ayer"}
        />
        <SearchCard
          ownerName="Paola Legaspy"
          dogName="Feredico"
          reward={true}
          dateLost={"ayer"}
        />
      </Stack>
    </ScrollArea>
  );
};

export default SearchList;
