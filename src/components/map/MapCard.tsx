import {
  Badge,
  Button,
  Card,
  Group,
  Stack,
  Text,
  Title,
  Image,
} from "@mantine/core";

const MapCard = () => {
  return (
    <Stack>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={100}
          alt="Norway"
        />{" "}
      </Card.Section>
      <Group>
        <Title order={4}>Federico</Title>
        <Badge color="green">Recompensa</Badge>
      </Group>
      <Text>Perdido desde ayer</Text>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Ver Mas
      </Button>
    </Stack>
  );
};

export default MapCard;
