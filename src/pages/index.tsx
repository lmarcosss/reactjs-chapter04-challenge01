import { Box, Text, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Swiper } from "../components/Swiper";

export default function Home() {
  return (
    <Box align="center">
      <Header isHome />
      <Banner />
      <TravelTypes />

      <Flex justify="center" direction="column">
        <Text textAlign="center" fontSize={["24", "30", "36"]} fontWeight="500">
          Vamos nessa?
        </Text>
        <Text textAlign="center" fontSize={["24", "30", "36"]} fontWeight="500">
          Então escolha seu continente
        </Text>
      </Flex>

      <Swiper />
    </Box>
  );
}
