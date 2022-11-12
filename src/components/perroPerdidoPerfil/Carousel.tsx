import { Carousel, Image } from '@mantine/carousel';

function PerroCarousel() {
  return (
    <Carousel sx={{ maxWidth: 320}} mx="auto" withIndicators height={200}>
      <Carousel.Slide><Image
      radius="md"
      src="./helloimdude.jpg"
      />
      </Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

export default PerroCarousel;