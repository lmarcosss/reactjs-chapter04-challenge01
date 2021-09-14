import { Flex, Image, Icon, Box, Button } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

interface Props {
  isHome?: boolean;
}

export function Header({ isHome }: Props): React.ReactElement {
	const route = useRouter();

	function pushToHome() {
		route.replace('/');
	}

	return (
		<Flex
			as="header"
			w="100%"
			h={['16', '20']}
			maxWidth={1480}
			mx="auto"
			align="center"
			justify="center"
			position="relative"
		>
			{!isHome && (
				<Box position="absolute" left={['4', '16']}>
					<Button bg="none" _hover={{ bg: 'none' }} onClick={pushToHome}>
						<Icon as={RiArrowLeftSLine} fontSize="40" />
					</Button>
				</Box>
			)}

			<Image src="/images/logo.png" alt="logo" width="auto" h={[8, 35]} />
		</Flex>
	);
}
