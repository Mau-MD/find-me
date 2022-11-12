import { Card, Group, Stack, Title, Text } from "@mantine/core";

const CartaPerros = () => {
  return (
    <Card
      shadow="sm"
      p="sm"
      radius="md"
      withBorder
      style={{ maxWidth: "400px" }}
    >
      <Group>
        <img
          src={
            "https://th.bing.com/th/id/R.e95c6ea4db3b79eda1c8a94c886c8071?rik=GhlexzYxf4p9RQ&pid=ImgRaw&r=0"
          }
          style={{ width: "30%", borderRadius: "10%" }}
        ></img>
        <Stack justify={"space-between"}>
          <Stack spacing={"xs"}>
            <Title size={"sm"}>Nombre del perro</Title>
            <Text size="xs">Dueño del perro</Text>
          </Stack>
          <div>perdido desde x</div>
        </Stack>
      </Group>
    </Card>
  );
};

export default CartaPerros;
