import { Image, Flex, Box, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';

export default function Custom404() {
	const errorImage = 'https://images.unsplash.com/photo-1570956792576-407be8243c77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80';
	
	return (
		<>
			<Header />

			<Flex justify="center" align="center" h="100%" pt="48" direction="column">
				<Box>
					<Text pb="2" fontSize={['18', '24']} fontWeight="bold">Endereço não encontrado :(</Text>
					<Image w={[300, 500]} src={errorImage} alt="cat-image" />
				</Box>
			</Flex>
		</>
	);
}