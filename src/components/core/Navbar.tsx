import { Header, Container, Text, Group, Flex } from "@mantine/core";
const Navbar = () => {
  let HEADER_HEIGHT = "70px";
  return (
    <Header
      height={HEADER_HEIGHT}
      style={{
        background: "#75e886",
        color: "white",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        w="100%"
      >
        <Group>
          <Text>logo</Text>
        </Group>
        <Group spacing="xl">
          <Text>Perros perdidos</Text>
          <Text>Generar reporte</Text>
          <Text>Inicio de sesion</Text>
        </Group>
      </Container>
    </Header>
  );
};

export default Navbar;
