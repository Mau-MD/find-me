import {
  Card,
  Flex,
  Group,
  Header,
  Paper,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import SearchFilters from "../components/busqueda/SearchFilters";
import SearchList from "../components/busqueda/SearchList";
import GMap from "../components/map/Map";

const data = [
  {
    name: "Federico",
    owner: "Paola Legaspy",
    lost: new Date(),
    reward: true,
  },
];

const Busqueda: NextPage = () => {
  return (
    <Stack>
      <Title>🐕 Perros Perdidos</Title>
      <SearchFilters />
      <Flex>
        <Paper w={"40%"}>
          <SearchList />
        </Paper>
        <Paper pos={"relative"} pl={"lg"}>
          <GMap />
        </Paper>
      </Flex>
    </Stack>
  );
};
export default Busqueda;
