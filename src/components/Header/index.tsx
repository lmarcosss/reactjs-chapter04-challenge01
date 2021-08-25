import { Flex, Image } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Icon, Link as ChakraLink } from "@chakra-ui/react";

interface Props {
  isHome?: boolean;
}

export function Header({ isHome }: Props) {
  return (
    <Flex
      as="header"
      w="100%"
      h={["16", "20"]}
      maxWidth={1480}
      mx="auto"
      align="center"
      justify="center"
    >
      {!isHome && (
        <ChakraLink>
          <Icon as={RiArrowLeftSLine} fontSize="40" mt="2" />
        </ChakraLink>
      )}

      <Image src="/images/logo.png" alt="logo" width="auto" h={[8, 35]} />
    </Flex>
  );
}
