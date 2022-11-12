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
} from "@mantine/core";
import React from "react";

interface Props {
  dogName: string;
  ownerName: string;
  reward: boolean;
  dateLost: string;
  image: string;
  detalles: string | null;
  visto: boolean;
  raza: string;
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
}: Props) => {
  return (
    <Card withBorder shadow={"md"} w="100%">
      <Stack h="100%">
        <Image src={image} />
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
            {!visto && <Text>Perdido desde {dateLost}</Text>}

            <Button>Ver Mas</Button>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SearchCard;
