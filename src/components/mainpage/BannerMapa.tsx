import {
  Container,
  Title,
  Flex,
  Group,
  Text,
  Stack,
  Button,
  Card,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import { trpc } from "../../utils/trpc";

const BannerMapa = () => {
  //esto se saca de base de datso
  const { data: found } = trpc.posts.foundSoFar.useQuery();

  const timer = useRef<null | NodeJS.Timer>(null);

  const [num, setNum] = useState(0);

  useEffect(() => {
    if (found === undefined) return;
    timer.current = setInterval(() => {
      setNum((num) => num + 1);
    }, 100);
  }, [found]);

  useEffect(() => {
    if (found === undefined) return;
    if (num > found + 10) {
      clearInterval(timer.current!);
    }
  }, [found, num]);

  return (
    <Stack align={"center"}>
      <Stack align={"center"}>
        <Title color={"#0064b5"}>{num}</Title>
        <Text size={"xl"}>Perros encontrados hasta hoy</Text>
      </Stack>
    </Stack>
  );
};

export default BannerMapa;
