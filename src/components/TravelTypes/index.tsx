import { Image, Flex, Text } from "@chakra-ui/react";

export function TravelTypes() {
  const types = [
    {
      image: "cocktail.svg",
      title: "vida noturna",
    },
    {
      image: "surf.svg",
      title: "praia",
    },
    {
      image: "building.svg",
      title: "moderno",
    },
    {
      image: "museum.svg",
      title: "clássico",
    },
    {
      image: "earth.svg",
      title: "e mais...",
    },
  ];

  return (
    <Flex
      minHeight={["400", "250"]}
      wrap="wrap"
      align="center"
      justify="space-around"
      mx={["0", "32"]}
    >
      {types.map((type) => (
        <Flex minWidth="32" direction="column" align="center" key={type.title}>
          <Image w="16" src={`/images/${type.image}`} />
          <Text color="gray.700" fontWeight="600" fontSize={20}>
            {type.title}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
