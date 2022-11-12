import { Stack, Flex, Image, Container, Text } from "@mantine/core";
const Bienvenida = () => {
  return (
    <Stack style={{ width: "100%" }}>
      <Flex justify={"center"} style={{}}>
        <Image src={"https://i.imgur.com/73zUnAh.png"} width={"90%"} />
      </Flex>
      <Container>
        <Text size="xl" weight={800} align="center">
          Ayudanos a encontrar el perro de alguien lo antes posible 🐕
        </Text>
      </Container>
    </Stack>
  );
};

export default Bienvenida;
