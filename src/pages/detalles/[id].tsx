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
  Badge,
  Card,
  Image,
  Center,
} from "@mantine/core";
import { PostPerdido, User } from "@prisma/client";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import SearchCard from "../../components/busqueda/SearchCard";
import GMap from "../../components/map/Map";
import CartaPerros from "../../components/mainpage/PerrosPrincipal/CartaPerros";
import Amo from "../../components/perroPerdidoPerfil/Amo";
import { getUrl } from "@trpc/client/dist/links/internals/httpUtils";

const id = () => {
  let reward = true;
  let visto = false;
  let raza = "perro de la calle";
  const router = useRouter();

  const { id } = router.query;
  const data = trpc.posts.singlePost.useQuery({ id }).data;
  if (!data) {
    return <div>loading...</div>;
  }
  return (
    <Stack spacing={100}>
      <Card shadow="xl" p={0} radius="md" withBorder>
        <Flex justify="" w={"100%"} gap={20}>
          <div style={{ width: "40%" }}>
            <Image src={data.imagenes[0]} radius="md" height={"300px"} />
          </div>
          <Flex p={10} pr={40} justify={"space-between"} w={"60%"}>
            <Stack maw={400} justify={"center"}>
              <Stack spacing={6}>
                <Title>{data?.nombrePerro} 🐾</Title>
                <Flex gap={10} align="center">
                  <Text color={"gray"}>{format(data?.fecha, "dd/MM/yy")}</Text>
                  {data?.recompensa && <Badge color="green">Recompensa</Badge>}
                  {!visto && <Badge color="blue">{raza}</Badge>}
                </Flex>
              </Stack>
              <Text style={{ color: "#00467f" }} weight={800}>
                {data?.raza}
              </Text>
              <Text weight={500}>{data?.edad} años</Text>

              <Text align="justify">{data?.detalles}</Text>
              <Title order={2}></Title>
            </Stack>
            <Stack justify={"space-between"} pt={10} pb={30}>
              <Amo nombre={data?.usuario.name} telefono={data?.telefono} />
              <Button onClick={() => router.push("/vista")}>
                <Group spacing={7}>
                  <Text>Vi a este perro</Text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033" />
                    <path d="M15 19l2 2l4 -4" />
                  </svg>
                </Group>
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Card>
      <Center>
        <GMap
          posts={[data]}
          visto={true}
          center={{ longitud: data.longitud, latitud: data.latitud }}
          containerClass="map-container-2"
        />
      </Center>
    </Stack>
  );
};
export default id;
