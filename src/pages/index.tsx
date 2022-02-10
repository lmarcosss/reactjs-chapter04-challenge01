import { Box, Text, Flex } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { Swiper } from '../components/Swiper';
import { IContinent } from '../types';
import { fetchData } from '../services/api';

interface IProps {
  continents: IContinent[];
}

export default function Home({ continents }: IProps): React.ReactElement {
	return (
		<Box align="center">
			<Header isHome />
			<Banner />
			<TravelTypes />

			<Flex justify="center" direction="column">
				<Flex paddingBottom="8" justifyContent="center" alignItems="center">
					<Box width="60px" border="1px solid #47585B" />
				</Flex>
				<Text textAlign="center" fontSize={['20', '30', '36']} fontWeight="500">
          Vamos nessa?
				</Text>
				<Text
					textAlign="center"
					fontSize={['20', '30', '36']}
					fontWeight="500"
					pb="4"
				>
          Então escolha seu continente
				</Text>
			</Flex>

			<Swiper continents={continents} />
		</Box>
	);
}

const getContinents = async () => {
	return await fetchData(`${process.env.API_ENDPOINT}/continents`);
};

export const getStaticProps: GetStaticProps = async () => {
	const continents = await getContinents();

	return {
		props: {
			continents,
		},
		revalidate: 60 * 60 * 24, // 24 hours
	};
};
