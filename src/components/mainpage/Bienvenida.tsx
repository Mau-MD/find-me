import { Carousel } from "@mantine/carousel";
import {
  Stack,
  Flex,
  Image,
  Container,
  Text,
  Center,
  Title,
} from "@mantine/core";
const Bienvenida = () => {
  return (
    <Stack style={{ width: "100%" }}>
      <Center>
        <Image
          src={
            "https://4pawsins.com/wp-content/uploads/2017/02/FAQs-short-banner.jpg"
          }
          style={{ width: "20000px", marginTop: "-80px" }}
        />
      </Center>
      <Container>
        <Title align="center">
          Ayúdanos a encontrar el perro de alguien lo antes posible 🐕
        </Title>
      </Container>
    </Stack>
  );
};

export default Bienvenida;
