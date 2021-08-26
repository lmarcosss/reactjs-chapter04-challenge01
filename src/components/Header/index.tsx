import { Flex, Image, Icon, Link as ChakraLink, Box } from "@chakra-ui/react";
import { RiArrowLeftSLine } from "react-icons/ri";
import Link from "next/link";

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
      position="relative"
    >
      {!isHome && (
        <Box position="absolute" left={["4", "16"]}>
          <Link passHref href="/">
            <ChakraLink>
              <Icon as={RiArrowLeftSLine} fontSize="40" />
            </ChakraLink>
          </Link>
        </Box>
      )}

      <Image src="/images/logo.png" alt="logo" width="auto" h={[8, 35]} />
    </Flex>
  );
}
