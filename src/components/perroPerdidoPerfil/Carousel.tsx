import { Carousel, Image } from '@mantine/carousel';

function PerroCarousel() {
  return (
    <Carousel sx={{ width: "50%" }} mx="auto" withIndicators height={200}>
      <Carousel.Slide>
        hola{/* <Image
        radius="md"
        src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        alt="Random unsplash image"
      /> */}
      </Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

export default PerroCarousel;