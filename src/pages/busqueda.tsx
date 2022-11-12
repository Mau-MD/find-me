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
import { PostPerdido } from "@prisma/client";
import { NextPage } from "next";
import SearchFilters from "../components/busqueda/SearchFilters";
import SearchList from "../components/busqueda/SearchList";
import GMap from "../components/map/Map";
import { trpc } from "../utils/trpc";

const Busqueda: NextPage = () => {
  const { data: posts } = trpc.posts.postsPerdidos.useQuery();
  console.log(posts);
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
