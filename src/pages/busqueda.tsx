import {
  Card,
  Center,
  Flex,
  Group,
  Header,
  Loader,
  Paper,
  SegmentedControl,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useDebouncedState, useDebouncedValue } from "@mantine/hooks";
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
  const [color, setColor] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [nombre, setNombre] = useState("");

  const [dName] = useDebouncedValue(nombre, 500);
  const [category, setCategory] = useState<"perdidos" | "vistos">("perdidos");
  const { data: posts } = trpc.posts.posts.useQuery({
    raza,
    category,
    color,
    fecha,
    name: dName,
  });

  if (!posts) {
    return (
      <Center w={"100vw"}>
        <Center h={"80vh"}>
          <Loader />
        </Center>
      </Center>
    );
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
      <SearchFilters
        raza={raza}
        setRaza={setRaza}
        color={color}
        setColor={setColor}
        fecha={fecha}
        setFecha={setFecha}
        nombre={nombre}
        setNombre={setNombre}
      />
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
