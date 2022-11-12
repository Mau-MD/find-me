import { Carousel } from "@mantine/carousel";
import {
  Stack,
  Flex,
  Image,
  Container,
  Text,
  Center,
  Title,
  Paper,
} from "@mantine/core";
const Bienvenida = () => {
  return (
    <Stack style={{ width: "100%" }}>
      <Center>
        <div style={{ width: "2000px" }}>
          <Image
            src={
              "https://4pawsins.com/wp-content/uploads/2017/02/FAQs-short-banner.jpg"
            }
            style={{
              marginTop: "-100px",
            }}
          />
        </div>
      </Center>
      <Center mt={20}>
        <Stack>
          <Title align="center">
            Ayúdanos a encontrar el perro de alguien lo antes posible 🐕
          </Title>
        </Stack>
      </Center>
    </Stack>
  );
};

export default Bienvenida;
