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
import { format } from "date-fns";
import { PostsPerdidoWithUser } from "../../pages/busqueda";

interface Props {
  post: PostsPerdidoWithUser;
}
const MapCard = ({ post }: Props) => {
  return (
    <Stack>
      <Card.Section>
        <Image src={post.imagen} height={100} alt="Norway" />{" "}
      </Card.Section>
      <Group>
        <Title order={4}>Federico</Title>
        {post.recompensa && <Badge color="green">Recompensa</Badge>}
      </Group>
      <Text>Perdido desde {format(post.fecha, "dd/MM/yy")}</Text>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Ver Mas
      </Button>
    </Stack>
  );
};

export default MapCard;
