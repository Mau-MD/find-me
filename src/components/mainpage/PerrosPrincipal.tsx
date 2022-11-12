import {
  Text,
  Stack,
  Container,
  Title,
  Button,
  Flex,
  Grid,
  SimpleGrid,
  Paper,
  Group,
} from "@mantine/core";
import { PostPerdido, User } from "@prisma/client";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import SearchCard from "../busqueda/SearchCard";
import GMap from "../map/Map";
import CartaPerros from "./PerrosPrincipal/CartaPerros";

const PerrosPrincipal = () => {
  const { data: posts } = trpc.posts.posts.useQuery({
    raza: "",
    category: "perdidos",
  });
  const filteredPosts = posts?.slice(0, 4);
  const router = useRouter();

  return (
    <Stack align={"center"}>
      <Title order={2}>Perros En Busqueda</Title>
      <SimpleGrid cols={2}>
        {filteredPosts &&
          filteredPosts.map((post) => (
            <SearchCard
              key={post.id}
              ownerName={post.usuario.name || ""}
              dogName={post.nombrePerro}
              reward={post.recompensa}
              dateLost={format(post.fecha, "dd/MM/yyyy")}
              image={post.imagenes[0]}
              detalles={post.detalles ?? post.detallesPerro}
              visto={false}
              raza={post.raza}
              found={post.casoAbierto}
            />
          ))}
      </SimpleGrid>
      <Group>
        <Button
          size="lg"
          mt={20}
          variant="gradient"
          onClick={() => router.push("/busqueda")}
        >
          Buscar Perros
        </Button>
        <Button
          size="lg"
          mt={20}
          gradient={{ from: "orange", to: "red" }}
          variant="gradient"
          onClick={() => router.push("/agregar")}
        >
          Reportar Perro Perdido
        </Button>
        <Button
          size="lg"
          mt={20}
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          variant="gradient"
          onClick={() => router.push("/vista")}
        >
          Reportar Perro Visto
        </Button>
      </Group>
      <Title order={2} mt={20}>
        Mapa
      </Title>
      <Paper>
        <GMap posts={posts} visto={false} containerClass="map-container-2" />
      </Paper>
    </Stack>
  );
};

export default PerrosPrincipal;
