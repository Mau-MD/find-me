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
    <Stack spacing={"sm"}>
      <Card.Section>
        <Image src={post.imagenes[0] || ""} height={100} alt="Norway" />{" "}
      </Card.Section>
      <Group>
        <Title order={4}>{post.nombrePerro}</Title>
        {post.recompensa && <Badge color="green">Recompensa</Badge>}
      </Group>
      <Stack spacing={0}>
        <Text color="dimmed">De: {post.usuario.name}</Text>
        <Text>Perdido desde {format(post.fecha, "dd/MM/yy")}</Text>
      </Stack>
      <Button variant="light" color="blue" fullWidth radius="md">
        Ver Mas
      </Button>
    </Stack>
  );
};

export default MapCard;
