import {
  Card,
  Flex,
  Group,
  Header,
  Paper,
  SegmentedControl,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { PostPerdido, User } from "@prisma/client";
import _ from "lodash";
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
  const [category, setCategory] = useState<"perdidos" | "vistos">("perdidos");
  const { data: posts } = trpc.posts.posts.useQuery({ raza, category });

  if (!posts) {
    return <div>Loading...</div>;
  }
  return (
    <Stack>
      <Group position={"apart"}>
        <Title>🐕 Perros {_.capitalize(category)}</Title>
        <SegmentedControl
          onChange={(val) => setCategory(val as "perdidos" | "vistos")}
          value={category}
          data={[
            { label: "Perdidos", value: "perdidos" },
            { label: "Vistos", value: "vistos" },
          ]}
        />
      </Group>
      <SearchFilters raza={raza} setRaza={setRaza} />
      <Flex>
        <Paper w={"50%"}>
          <SearchList posts={posts} visto={category === "vistos"} />
        </Paper>
        <Paper pos={"relative"} pl={"lg"}>
          <GMap posts={posts} visto={category === "vistos"} />
        </Paper>
      </Flex>
    </Stack>
  );
};
export default Busqueda;
