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

interface Props {
  posts: PostsPerdidoWithUser[];
}
const SearchList = ({ posts }: Props) => {
  return (
    <ScrollArea style={{ height: "50vh" }}>
      <Stack style={{ overflowY: "scroll" }}>
        {posts.map((post) => (
          <SearchCard
            key={post.id}
            ownerName={post.usuario.name || ""}
            dogName="Feredico"
            reward={post.recompensa}
            dateLost={format(post.fecha, "dd/MM/yyyy")}
            image={post.imagen}
          />
        ))}
      </Stack>
    </ScrollArea>
  );
};

export default SearchList;
