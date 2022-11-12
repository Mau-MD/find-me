import { Card, Group, Stack, Title, Text, Flex, Badge } from "@mantine/core";

const CartaPerros = () => {
  let reward = true;
  let visto = false;
  let raza = "chihuahua";
  return (
    <Card
      shadow="sm"
      p="sm"
      radius="md"
      withBorder
      style={{ maxWidth: "600px" }}
      m={10}
    >
      <Flex gap={15}>
        <img
          src={
            "https://th.bing.com/th/id/R.e95c6ea4db3b79eda1c8a94c886c8071?rik=GhlexzYxf4p9RQ&pid=ImgRaw&r=0"
          }
          style={{ width: "45%", borderRadius: "10%" }}
        ></img>
        <Stack justify={"space-between"} pt={5} pb={5}>
          <Group p={0}>
            <Stack spacing={0}>
              <Title order={3}>Nombre del perro</Title>
              <Text color={"dimmed"}>Dueño del perro</Text>
            </Stack>
            {reward && <Badge color="green">Recompensa</Badge>}
            {!visto && <Badge color="blue">{raza}</Badge>}
          </Group>
          <div>Perdido desde el</div>
        </Stack>
      </Flex>
    </Card>
  );
};

export default CartaPerros;
