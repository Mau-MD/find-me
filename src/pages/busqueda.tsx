import {
  Card,
  Group,
  Header,
  Paper,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { NextPage } from "next";
import SearchList from "../components/busqueda/SearchList";
import GMap from "../components/map/Map";

const Busqueda: NextPage = () => {
  return (
    <Stack>
      <Title>Perros Perdidos</Title>
      <TextInput />
      <Group>
        <Paper w={"40%"}>
          <SearchList />
        </Paper>
      </Group>
    </Stack>
  );
};
export default Busqueda;
