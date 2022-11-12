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
import { useRouter } from "next/router";
import { PostsPerdidoWithUser } from "../../pages/busqueda";

interface Props {
  post: PostsPerdidoWithUser;
  visto: boolean;
}
const MapCard = ({ post, visto }: Props) => {
  const router = useRouter();
  return (
    <Stack spacing={"sm"}>
      {post.imagenes[0] && (
        <Card.Section>
          <Image src={post.imagenes[0] || ""} height={100} alt="Norway" />{" "}
        </Card.Section>
      )}
      <Group>
        <Title order={4}>{post.nombrePerro}</Title>
        {post.recompensa && <Badge color="green">Recompensa</Badge>}
      </Group>
      <Stack spacing={0}>
        <Text color="dimmed">
          {visto ? "Reportado por: " : "De: "}
          {post.usuario.name}
        </Text>
        <Text>
          {visto ? "Visto el " : "Perdido desde"}
          {format(post.fecha, "dd/MM/yy")}
        </Text>
      </Stack>
      <Button
        variant="light"
        color="blue"
        fullWidth
        radius="md"
        onClick={() => router.push(`/detalles/${post.id}`)}
      >
        Ver Mas
      </Button>
    </Stack>
  );
};

export default MapCard;
