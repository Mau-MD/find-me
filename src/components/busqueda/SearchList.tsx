import {
  Card,
  Group,
  Avatar,
  Stack,
  Title,
  Badge,
  Button,
  Text,
  Paper,
  ScrollArea,
} from "@mantine/core";
import { PostPerdido } from "@prisma/client";
import React from "react";
import { PostsPerdidoWithUser } from "../../pages/busqueda";
import SearchCard from "./SearchCard";
import SearchFilters from "./SearchFilters";
import { format } from "date-fns";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
  posts: PostsPerdidoWithUser[];
  visto: boolean;
}
const SearchList = ({ posts, visto }: Props) => {
  const matches = useMediaQuery("(max-width: 768px)");
  return (
    <ScrollArea style={{ height: matches ? "100vh" : "50vh" }}>
      <Stack style={{ overflowY: "scroll" }}>
        {posts.map((post) => (
          <SearchCard
            key={post.id}
            ownerName={post.usuario.name || ""}
            dogName={post.nombrePerro}
            reward={post.recompensa}
            dateLost={format(post.fecha, "dd/MM/yyyy")}
            image={post.imagenes[0] || ""}
            detalles={post.detalles ?? post.detallesPerro}
            visto={visto}
            raza={post.raza}
            found={post.casoAbierto}
            id={post.id}
          />
        ))}
      </Stack>
    </ScrollArea>
  );
};

export default SearchList;
