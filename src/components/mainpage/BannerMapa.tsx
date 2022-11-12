import {
  Container,
  Title,
  Flex,
  Group,
  Text,
  Stack,
  Button,
} from "@mantine/core";

const BannerMapa = () => {
  //esto se saca de base de datso
  const numeroEncontrados = 100;
  return (
    <Group position="center" spacing={100}>
      <Stack align={"center"}>
        <Title color={"#0064b5"}>{numeroEncontrados}</Title>
        <Text size={"xl"}>Perros encontrados hasta hoy</Text>
      </Stack>

      <Stack align={"center"}>
        <div
          style={{ width: "600px", height: "300px", border: "1px solid black" }}
        >
          Aqui va un mapa
        </div>
        <Container>
          <Button>ver mapa</Button>
        </Container>
      </Stack>
    </Group>
  );
};

export default BannerMapa;
