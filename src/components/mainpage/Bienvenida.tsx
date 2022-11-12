import { Stack, Container, Text } from "@mantine/core";
const Bienvenida = () => {
  return (
    <Stack style={{ width: "100%" }}>
      <Container>Aqui va el logo</Container>
      <Container>
        <Text size="xl" weight={800}>
          Ayudanos a encontrar el perro de alguien lo antes posible
        </Text>
      </Container>
    </Stack>
  );
};

export default Bienvenida;
