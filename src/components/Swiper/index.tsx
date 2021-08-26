import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Swiper() {
  return (
    <Box px={["0", "10", "20"]} py={["0", "10", "10"]}>
      <SwiperReact
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        <SwiperSlide>
          <Flex
            align="center"
            justify="center"
            direction="column"
            backgroundImage="images/europe.png"
            backgroundSize="cover"
            w="100%"
            height={[250, 300, 450]}
          >
            <Heading
              fontWeight="700"
              fontSize={["24", "36", "48"]}
              color="white"
            >
              Europa
            </Heading>
            <Text
              fontWeight="700"
              mt="2"
              fontSize={["14", "18", "24"]}
              color="gray.200"
            >
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            align="center"
            justify="center"
            direction="column"
            backgroundImage="images/europe.png"
            backgroundSize="cover"
            w="100%"
            height={[250, 300, 450]}
          >
            <Heading
              fontWeight="700"
              fontSize={["24", "36", "48"]}
              color="white"
            >
              Europa
            </Heading>
            <Text fontWeight="700" fontSize={["12", "18", "24"]} color="white">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex
            align="center"
            justify="center"
            direction="column"
            backgroundImage="images/europe.png"
            backgroundSize="cover"
            w="100%"
            height={[250, 300, 450]}
          >
            <Heading
              fontWeight="700"
              fontSize={["24", "36", "48"]}
              color="white"
            >
              Europa
            </Heading>
            <Text fontWeight="700" fontSize={["12", "18", "24"]} color="white">
              O continente mais antigo.
            </Text>
          </Flex>
        </SwiperSlide>
      </SwiperReact>
    </Box>
  );
}
