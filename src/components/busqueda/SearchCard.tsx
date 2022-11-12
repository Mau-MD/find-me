import {
  Avatar,
  Badge,
  Button,
  Card,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Image from "next/image";
import React from "react";

interface Props {
  dogName: string;
  ownerName: string;
  reward: number;
  dateLost: string;
}
const SearchCard = ({ ownerName, dogName, dateLost, reward }: Props) => {
  return (
    <Card withBorder shadow={"md"} w="100%">
      <Group position="apart">
        <Avatar />
        <Stack w="80%">
          <Stack spacing={1}>
            <Group position="apart">
              <Title order={3}>{dogName}</Title>
              <Badge color="green">${reward}</Badge>
            </Group>
            <Text color={"dimmed"}>De: {ownerName}</Text>
          </Stack>
          <Group position="apart">
            <Text>Perdido desde {dateLost}</Text>
            <Button>Ver Mas</Button>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
};

export default SearchCard;