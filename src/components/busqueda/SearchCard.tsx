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
} from "@mantine/core";
import { IconBrandFacebook } from "@tabler/icons";
import React from "react";
import { useRouter } from "next/router";

export function obtenerURL() {
  var URL = "https://www.youtube.com/watch?v=CU0i9W_XkDI";
  var facebook = "https://www.facebook.com/sharer/sharer.php?u=";
  var final = facebook.concat(URL.toString());
  return final;
}

interface Props {
  dogName: string;
  ownerName: string;
  reward: boolean;
  dateLost: string;
  image: string;
  detalles: string | null;
  visto: boolean;
  raza: string;
  id: string;
}
const SearchCard = ({
  id,
  ownerName,
  dogName,
  dateLost,
  reward,
  image,
  detalles,
  visto,
  raza,
}: Props) => {
  const router = useRouter();

  return (
    <Card
      withBorder
      shadow={"md"}
      w="100%"
      onClick={() => {
        router.push(`/detalles/${id}`);
      }}
    >
      <Stack h="100%">
        <Image src={image} height="200px" />
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
          <Group position="apart">
            <Text>Perdido desde {dateLost}</Text>
            {!visto && <Text>Perdido desde {dateLost}</Text>}
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

            <Button>Ver Mas</Button>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SearchCard;
