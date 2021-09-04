import { Flex, Text, Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w="100%"
      h={["180", "240", "300"]}
      backgroundImage="/images/background.png"
      backgroundSize="cover"
      align="center"
      justify="space-around"
    >
      <Flex p={["8", "0"]} direction="column" alignItems={"flex-start"}>
        <Text fontSize={["20", "30", "36"]} fontWeight="500" color="white">
          5 Continentes,
        </Text>
        <Text fontSize={["20", "30", "36"]} fontWeight="500" color="white">
          infinitas possibilidades.
        </Text>
        <Text
          pt={["2", "4"]}
          fontSize={["14", "15", "20"]}
          fontWeight="400"
          color="gray.300"
        >
          Chegou a hora de tirar do papel a viagem que você
        </Text>
        <Text fontSize={["14", "15", "20"]} fontWeight="400" color="gray.300">
          sempre sonhou.
        </Text>
      </Flex>

      {isWideVersion && <Image pt="20" src="/images/airplane.png" />}
    </Flex>
  );
}
