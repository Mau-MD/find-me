import { SimpleGrid, Stack, Title } from "@mantine/core";
import { format } from "date-fns";
import { NextPage } from "next";
import React from "react";
import SearchCard from "../components/busqueda/SearchCard";
import { trpc } from "../utils/trpc";

const Mine: NextPage = () => {
  const { data: posts } = trpc.posts.getOwnPosts.useQuery();
  return (
    <Stack>
      <Title>Mis Publicaciones</Title>
      <SimpleGrid cols={3}>
        {posts &&
          posts.map((post) => (
            <SearchCard
              ownerName={post.usuario.name || ""}
              dateLost={format(post.fecha, "dd/MM/yyyy")}
              detalles={post.detalles}
              dogName={post.nombrePerro}
              image={post.imagenes[0]}
              raza={post.raza}
              reward={post.recompensa}
              visto={false}
              isOwn
              found={post.casoAbierto}
              id={post.id}
            />
          ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Mine;
