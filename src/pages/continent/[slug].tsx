import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { fetchData } from '../../services/api';
import { IContinent } from '../../types';

interface IProps {
	continent: IContinent;
}

const cities = [
	{
		name: 'Londres',
		country: 'Reino Unido',
		imageUrl: 'https://images.unsplash.com/photo-1561373725-d173c9d4c5fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
	},
	{
		name: 'Paris',
		country: 'França',
		imageUrl: 'https://images.unsplash.com/photo-1508050919630-b135583b29ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
	},
	{
		name: 'Roma',
		country: 'Itália',
		imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1396&q=80'
	},
	{
		country: 'Holanda',
		name: 'Amsterdã',
		imageUrl: 'https://images.unsplash.com/photo-1462531499382-5251dd4878f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
	}
];

export default function Continent({ continent }: IProps): React.ReactElement {
	return (
		<Box>
			<Header />
			<Flex
				pb={['0', '12']}
				pl={['0', '24']}
				align={['center', 'flex-end']}
				justify={['center', 'flex-start']}
				textAlign={['center', 'left']}
				backgroundSize="cover"
				backgroundPosition="center"
				backgroundImage={continent.imageURL}
				w="100%"
				h={[200, 400]}
			>
				<Heading color="#fff">{continent.name}</Heading>
			</Flex>
			<Box px={['0´', '16']}>
				<Flex pt="12" direction={['column', 'row']}>
					<Text maxWidth={600} lineHeight="22px" pb="8" px={['4','8']}>{continent.description}</Text>
					<Flex maxWidth={500} flex="1" direction="row" pt={['2', '4']} px={['4', '0']} justify={['space-between', 'space-around']}>
						<Text fontSize="24" fontWeight="600" color="orange.300" textAlign={['left', 'center']}>
						50
							<Text fontSize="16" color="gray.600" fontWeight={['500', '600']}>países</Text>
						</Text>
						<Text fontSize="24" fontWeight="600" color="orange.300" textAlign={['left', 'center']}>
						60
							<Text fontSize="16" color="gray.600" fontWeight={['500', '600']}>linguas</Text>
						</Text>
						<Text fontSize="24" fontWeight="600" color="orange.300" textAlign={['left', 'center']}>
						70
							<Text fontSize="16" color="gray.600" fontWeight={['500', '600']}>cidades +100</Text>
						</Text>
					</Flex>
				</Flex>
				<Text fontSize={['24', '36']} px={['4','8']} pt="8" fontWeight="500">Cidades +100</Text>
			</Box>

			<Flex flexWrap="wrap" justify="space-around" py="8">
				{cities.map((city) => (
					<Box mt="8" background="white" borderRadius="6" width="256px" key={city.name}>
						<Image height="173" width="100%" src={city.imageUrl} />
						<Box borderRadius="6" border="1px solid rgba(255, 186, 8, 0.5)" borderTopRadius="0" borderTop="hidden">
							<Text fontWeight="600" pl="4" pt="4" pb="2" fontSize="16">{city.name}</Text>
							<Text fontWeight="500" pl="4" pb="4" fontSize="14">{city.country}</Text>
						</Box>
					</Box>
				))}
			</Flex>
		</Box>
	);
}

export const getStaticPaths: GetStaticPaths = async ()  => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};


export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params;

	const continent = await fetchData(`${process.env.API_ENDPOINT}/continents/${String(slug)}`);

	return {
		props: {
			continent,
		},
		revalidate: 60 * 60 * 24, // 24 hours
	};
};
