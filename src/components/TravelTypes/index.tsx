import {
  Image,
  Flex,
  Text,
  useBreakpointValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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

  return isWideVersion ? (
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
          <Text colorScheme="gray.700" fontWeight="600" fontSize={20}>
            {type.title}
          </Text>
        </Flex>
      ))}
    </Flex>
  ) : (
    <UnorderedList
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      mb="8"
      mt="4"
    >
      {types.map((type) => (
        <ListItem fontSize="24" color="orange.400" mr="7" ml="7" mt="6">
          <Text fontWeight="500" fontSize="18" color="gray.600">
            {type.title}
          </Text>
        </ListItem>
      ))}
    </UnorderedList>
  );
}
