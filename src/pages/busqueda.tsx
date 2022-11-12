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
import { PostPerdido, User } from "@prisma/client";
import { NextPage } from "next";
import { useState } from "react";
import SearchFilters from "../components/busqueda/SearchFilters";
import SearchList from "../components/busqueda/SearchList";
import GMap from "../components/map/Map";
import { trpc } from "../utils/trpc";

export type PostsPerdidoWithUser = PostPerdido & {
  usuario: User;
};

const Busqueda: NextPage = () => {
  const [raza, setRaza] = useState("");
  const { data: posts } = trpc.posts.postsPerdidos.useQuery({ raza });

  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <Stack>
      <Title>🐕 Perros Perdidos</Title>
      <SearchFilters raza={raza} setRaza={setRaza} />
      <Flex>
        <Paper w={"40%"}>
          <SearchList posts={posts} />
        </Paper>
        <Paper pos={"relative"} pl={"lg"}>
          <GMap posts={posts} />
        </Paper>
      </Flex>
    </Stack>
  );
};
export default Busqueda;
