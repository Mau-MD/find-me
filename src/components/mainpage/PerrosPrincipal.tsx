import {
  Text,
  Stack,
  Container,
  Title,
  Button,
  Flex,
  Grid,
} from "@mantine/core";
import CartaPerros from "./PerrosPrincipal/CartaPerros";

const PerrosPrincipal = () => {
  return (
    <Stack align={"center"}>
      <Title weight={800}>Perros Buscados</Title>
      <Button>Buscar perros</Button>
      <Grid columns={2} gutter={"xl"}>
        <Grid.Col span={1}>
          <CartaPerros />
          <CartaPerros />
        </Grid.Col>
        <Grid.Col span={1}>
          <CartaPerros />
          <CartaPerros />
        </Grid.Col>
      </Grid>
      <Button>Buscar perros</Button>
    </Stack>
  );
};

export default PerrosPrincipal;
