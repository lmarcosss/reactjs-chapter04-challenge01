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
      <Flex direction="column">
        <Text fontSize={["24", "30", "36"]} fontWeight="500" color="white">
          5 Continentes,
        </Text>
        <Text fontSize={["24", "30", "36"]} fontWeight="500" color="white">
          infinitas possibilidades.
        </Text>
        <Text fontSize={["15", "15", "20"]} fontWeight="400" color="white">
          Chegou a hora de tirar do papel a viagem que você
        </Text>
        <Text fontSize={["15", "15", "20"]} fontWeight="400" color="white">
          sempre sonhou.
        </Text>
      </Flex>

      {isWideVersion && <Image pt="20" src="/images/airplane.png" />}
    </Flex>
  );
}
