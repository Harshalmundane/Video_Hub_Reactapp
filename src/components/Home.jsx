import { Box, Stack, Image, Text ,Heading, Container } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png'

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const Home = () => { 
  return (
    <Box>
      <MyCarousel />
      <Container maxW="container.xl" h="100vh" p="16">
        <Heading 
          textTransform="uppercase" 
          py="2" 
          w="fit-content" 
          borderBottom="2px solid" 
          m="auto"
        >
          Services
        </Heading>

        <Stack h="full" p={'4'} alignItems={'centre'} direction={['column','row']}>
            <Image src={img5} h={["40","400"] }  filter={'hue-ratate(-130deg)'}/>
            <Text letterSpacing={'widest'} lineHeight={"190%"} p={["4","16"]} textAlign={'center'}>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam iste aliquam asperiores voluptatum,
                eum repudiandae tempore error, neque corporis sit incidunt illum expedita! 
               Autem nam itaque alias exercitationem excepturi accusantium odit ullam necessitatibus? Illum.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, praesentium quod facere maiores totam eum nobis odio neque doloribus autem magnam corporis nostrum,
                rem ducimus impedit adipisci eligendi similique mollitia quisquam, aliquid qui odit?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam deserunt aliquid dolorum iusto fuga!
            </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box position="relative" w="full" h="100vh">
        <Image 
          src={img1} 
          alt="Image 1" 
          objectFit="cover" 
          objectPosition="center" 
          w="full" 
          h="full" 
        />
        <Heading bgColor="whiteAlpha.900" color="black" {...headingOptions}>
          Watch The Future
        </Heading>
      </Box>

      <Box position="relative" w="full" h="100vh">
        <Image 
          src={img2} 
          height={'full'}
          width={'full'}
          objectFit="cover"
          alt="Image 2" 
          objectPosition="center" 
          w="full" 
          h="full" 
        />
        <Heading bgColor="whiteAlpha.900" color="black" {...headingOptions}>
          Gaming is Future
        </Heading>
      </Box>

      <Box position="relative" w="full" h="100vh">
        <Image 
          src={img3} 
          alt="Image 3" 
          objectFit="cover" 
          objectPosition="center" 
          w="full" 
          h="full" 
        />
        <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      <Box position="relative" w="full" h="100vh">
        <Image 
          src={img4} 
          alt="Image 4" 
          objectFit="cover" 
          objectPosition="center" 
          w="full" 
          h="full" 
        />
        <Heading bgColor="whiteAlpha.600" color="black" {...headingOptions}>
          Night Life is Cool
        </Heading>
      </Box>
    </Carousel>
  );
}

export default Home;
