import { Box, Text, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Swiper } from "../components/Swiper";
// import { GetStaticProps } from "next";

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

interface IProps {
  continents: {
    name: string;
    thumbnail: string;
    imageURL: string;
  }[];
}

export default function Home({ continents }: IProps) {
  console.log(continents);

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

      {/* <Swiper continents={continents} /> */}
    </Box>
  );
}

// const fetchData = async (url) => {
//   const response = await fetch(url);
//   const data = await response.json();

//   return data;
// };

// const getContinents = async () => {
//   return await fetchData("http://localhost:3000/api/continents");
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const continents = await getContinents();

//   return {
//     props: {
//       continents,
//     },
//     revalidate: 60 * 60 * 24, // 24 hours
//   };
// };
