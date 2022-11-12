import { Group, NumberInput, Select, Stack, TextInput } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
import _ from "lodash";
import { DatePicker } from "@mantine/dates";
import { SelectControl } from "@mantine/ds/lib/Demo/Configurator/controls/SelectControl";
import { colorSelect } from "../../pages/agregar";

// dog colors for select input in the form of {label: "color", value: "color"}
const colors = [
  { label: "Black", value: "black" },
  { label: "White", value: "white" },
];

interface Props {
  raza: string;
  setRaza: Dispatch<SetStateAction<string>>;
  nombre: string;
  setNombre: Dispatch<SetStateAction<string>>;
  fecha: Date;
  setFecha: Dispatch<SetStateAction<Date>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}
const SearchFilters = ({
  raza,
  setRaza,
  nombre,
  setNombre,
  color,
  setColor,
  fecha,
  setFecha,
}: Props) => {
  const { data: breeds } = useQuery(["breeds"], async () => {
    const res = await axios.get("https://dog.ceo/api/breeds/list/all ");
    const breedArray = Object.keys(res.data.message);
    return [
      { value: "", label: "Todas las razas" },
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
          <TextInput
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.currentTarget.value)}
          />
          <Select
            data={[{ label: "Todos los colores", value: "" }, ...colorSelect]}
            searchable
            label="Color"
            value={color}
            onChange={setColor}
          />
        </>
      )}
    </Group>
  );
};

export default SearchFilters;
