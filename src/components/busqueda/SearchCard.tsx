import {
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Stack,
  Text,
  Title,
  Image,
  ButtonProps,
  Paper,
} from "@mantine/core";
import { IconBrandFacebook } from "@tabler/icons";
import React from "react";
import { posts } from "../../server/trpc/router/getPost";
import { trpc } from "../../utils/trpc";

export function obtenerURL() {
  var URL = "https://www.youtube.com/watch?v=CU0i9W_XkDI";
  var facebook = "https://www.facebook.com/sharer/sharer.php?u=";
  var final = facebook.concat(URL.toString());
  return final;
}

interface Props {
  id: string;
  dogName: string;
  ownerName: string;
  reward: boolean;
  dateLost: string;
  image: string;
  detalles: string | null;
  visto: boolean;
  raza: string;
  isOwn: boolean;
  found: boolean;
}
const SearchCard = ({
  ownerName,
  dogName,
  dateLost,
  reward,
  image,
  detalles,
  visto,
  raza,
  isOwn = false,
  id,
  found = false,
}: Props) => {
  const utils = trpc.useContext();

  const markAsCompleted = trpc.posts.markAsFound.useMutation({
    onSuccess: () => {
      utils.posts.getOwnPosts.invalidate();
    },
  });

  const deleteMutation = trpc.posts.deletePost.useMutation({
    onSuccess: () => {
      utils.posts.getOwnPosts.invalidate();
    },
  });

  return (
    <Card withBorder shadow={"md"} w="100%">
      {found && (
        <Card.Section>
          <Paper
            style={{ background: "green", textAlign: "center", color: "white" }}
          >
            ENCONTRADO
          </Paper>
        </Card.Section>
      )}
      <Stack h="100%">
        {image && <Image src={image} height="200px" />}
        <Stack>
          <Stack spacing={1}>
            <Group position="apart">
              <Title order={3}>{dogName}</Title>
              <Group>
                {reward && <Badge color="green">Recompensa</Badge>}
                {!visto && <Badge>{raza}</Badge>}
              </Group>
            </Group>
            {visto ? (
              <Group position="apart">
                <Text color={"dimmed"}>Reportado por: {ownerName}</Text>
                <Badge>{raza}</Badge>
              </Group>
            ) : (
              <Text color={"dimmed"}>De: {ownerName}</Text>
            )}
            {detalles && <Text>{detalles}</Text>}
          </Stack>
          {visto ? (
            <Text>Visto el {dateLost}</Text>
          ) : (
            <Text>Perdido desde {dateLost}</Text>
          )}
          <Group position="apart">
            <Button
              component="a"
              target="_blank"
              rel="noopener noreferrer"
              href={obtenerURL()}
              leftIcon={<IconBrandFacebook size={20} />}
              styles={(theme) => ({
                root: {
                  backgroundColor: "#00acee",
                  border: 0,
                  height: 35,
                  "&:hover": {
                    backgroundColor: theme.fn.darken("#00acee", 0.05),
                  },
                },

                leftIcon: {
                  marginRight: 5,
                },
              })}
            >
              Compartir en Facebook
            </Button>
            {isOwn ? (
              <Group>
                <Button
                  color="green"
                  onClick={() => markAsCompleted.mutate({ id: id })}
                  loading={markAsCompleted.isLoading}
                >
                  Marcar como encontado
                </Button>
                <Button
                  color="red"
                  onClick={() => deleteMutation.mutate({ id: id })}
                  loading={deleteMutation.isLoading}
                >
                  Eliminar Publicacion
                </Button>
              </Group>
            ) : (
              <Button>Ver Mas</Button>
            )}
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SearchCard;
