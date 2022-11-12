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
}
const SearchCard = ({ ownerName, dogName, dateLost, reward, image }: Props) => {
  return (
    <Card withBorder shadow={"md"} w="100%">
      <Stack h="100%">
        <Image src={image} />
        <Stack>
          <Stack spacing={1}>
            <Group position="apart">
              <Title order={3}>{dogName}</Title>
              {reward && <Badge color="green">Recompensa</Badge>}
            </Group>
            <Text color={"dimmed"}>De: {ownerName}</Text>
          </Stack>
          <Group position="apart">
            <Text>Perdido desde {dateLost}</Text>
            <Button>Ver Mas</Button>
          </Group>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SearchCard;
