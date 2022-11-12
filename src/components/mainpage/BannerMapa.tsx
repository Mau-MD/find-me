import {
  Container,
  Title,
  Flex,
  Group,
  Text,
  Stack,
  Button,
  Card,
} from "@mantine/core";
import { trpc } from "../../utils/trpc";

const BannerMapa = () => {
  //esto se saca de base de datso
  const { data: found } = trpc.posts.foundSoFar.useQuery();
  return (
    <Stack align={"center"}>
      <Stack align={"center"}>
        <Title color={"#0064b5"}>{found || 0}</Title>
        <Text size={"xl"}>Perros encontrados hasta hoy</Text>
      </Stack>
    </Stack>
  );
};

export default BannerMapa;
