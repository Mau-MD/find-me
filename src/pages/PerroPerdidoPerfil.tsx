import {
  Card,
  Group,
  Image,
  Text,
  Badge,
  Button,
  Flex,
  Title,
  Stack,
  Container,
} from "@mantine/core";
import React from "react";
import PerroCarousel from "../components/perroPerdidoPerfil/Carousel";
import Amo from "..//components/perroPerdidoPerfil/Amo";

const Profile = () => {
  let reward = true;
  let visto = false;
  let raza = "perro de la calle";
  return (
    <Stack>
      <Card shadow="xl" p={0} radius="md" withBorder>
        <Flex justify="" w={"100%"} gap={20}>
          <div style={{ width: "40%" }}>
            <Image
              src={
                "https://th.bing.com/th/id/R.4598adf9ff249a30efdbb31650e82e27?rik=nTcIrjiGjpGIFQ&riu=http%3a%2f%2finspirationseek.com%2fwp-content%2fuploads%2f2016%2f02%2fCute-Dog-Images.jpg&ehk=%2fDDngdNA%2bebjrLjv8nS0U7xOTwznhNHrZOMRAXMC57Y%3d&risl=&pid=ImgRaw&r=0"
              }
              radius="md"
            />
          </div>
          <Flex p={10} pr={40} justify={"space-between"} w={"60%"}>
            <Stack maw={400} justify={"center"}>
              <Stack spacing={0}>
                <Title>{"Nombre del perro"} 🐾</Title>
                <Flex gap={10} align="center">
                  <Text color={"gray"}>Perdido desde ----</Text>
                  {reward && <Badge color="green">Recompensa</Badge>}
                  {!visto && <Badge color="blue">{raza}</Badge>}
                </Flex>
              </Stack>
              <Text style={{ color: "#00467f" }} weight={800}>
                Chihuahua
              </Text>
              <Text weight={500}>13 años</Text>

              <Text align="justify">
                Perro perdido por mi casa, se fue en la noche y ya nunca lo
                encontramos, porfa ayuden a buscarlo, estamos muy tristes sin
                el. Gracias por su atencion
              </Text>
              <Title order={2}></Title>
            </Stack>
            <Stack justify={"space-between"} pt={10} pb={30}>
              <Amo />
              <Button>
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
      <div style={{ height: "300px", border: "1px solid black" }}>
        <Container>Aqui va un mapa Grandote</Container>
      </div>
    </Stack>
  );
};

export default Profile;
