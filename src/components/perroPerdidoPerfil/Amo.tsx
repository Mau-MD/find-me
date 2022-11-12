import { Card, Stack, Title, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
const Amo = ({ nombre, telefono }: any) => {
  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Stack align={matches ? "center" : "end"} spacing={5}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="7" r="4" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      </svg>
      <Text color={"dimmed"}>{nombre}</Text>
      <Text color={"dimmed"}>{telefono}</Text>
    </Stack>
  );
};

export default Amo;
