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
      <div>
        {/* <Carousel mx="auto" withIndicators height={500}>
          <Carousel.Slide>
            <Image
              src={
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*"
              }
            />
          </Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
        </Carousel> */}
      </div>
      <Container>
        <Title align="center">
          Ayudanos a encontrar el perro de alguien lo antes posible 🐕
        </Title>
      </Container>
    </Stack>
  );
};

export default Bienvenida;
