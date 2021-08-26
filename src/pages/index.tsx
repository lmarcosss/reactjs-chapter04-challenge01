import { Box, Text, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Swiper } from "../components/Swiper";

const continents = [
  {
    name: "Europa",
    subtitle: "O continente mais antigo.",
    imageURL: "images/europe.png",
    href: "europe",
  },
  {
    name: "America do Sul",
    subtitle: "O continente mais novo.",
    imageURL: "images/europe.png",
    href: "south-america",
  },
];

export default function Home() {
  return (
    <Box align="center">
      <Header isHome />
      <Banner />
      <TravelTypes />

      <Flex justify="center" direction="column">
        <Text textAlign="center" fontSize={["20", "30", "36"]} fontWeight="500">
          Vamos nessa?
        </Text>
        <Text
          textAlign="center"
          fontSize={["20", "30", "36"]}
          fontWeight="500"
          pb="4"
        >
          Então escolha seu continente
        </Text>
      </Flex>

      <Swiper continents={continents} />
    </Box>
  );
}
