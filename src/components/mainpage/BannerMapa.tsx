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
import CountUp from "react-countup";
import { trpc } from "../../utils/trpc";

const BannerMapa = () => {
  //esto se saca de base de datso
  const { data: found } = trpc.posts.foundSoFar.useQuery();

  return (
    <Stack align={"center"}>
      <Stack align={"center"}>
        {!found ? (
          <span className="counter">0</span>
        ) : (
          <CountUp className="counter" start={0} end={10 + found} />
        )}
        <Text size={"xl"}>Perros encontrados hasta hoy</Text>
      </Stack>
    </Stack>
  );
};

export default BannerMapa;
