import { Group, NumberInput, Select, Stack } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
import _ from "lodash";

// dog colors for select input in the form of {label: "color", value: "color"}
const colors = [
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
];

interface Props {
  raza: string;
  setRaza: Dispatch<SetStateAction<string>>;
}
const SearchFilters = ({ raza, setRaza }: Props) => {
  const { data: breeds } = useQuery(["breeds"], async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all ");
    const breedArray = Object.keys(res.data.message);
    return [
      { value: "", label: " " },
      ...breedArray.map((breed) => {
        return { label: _.capitalize(breed), value: breed };
      }),
    ];
  });

  return (
    <Group>
      {breeds && (
        <>
          <Select
            data={breeds}
            searchable
            label="Raza"
            value={raza}
            onChange={(s) => setRaza(s || "")}
          />
          <NumberInput label="Edad" />{" "}
          <Select data={colors} searchable label="Color" />
        </>
      )}
    </Group>
  );
};

export default SearchFilters;
