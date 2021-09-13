import { Box, Text, Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';
import { Swiper } from '../components/Swiper';
import { GetStaticProps } from 'next';
import { IContinent } from '../types';

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

const fetchData = async (url) => {
	const response = await fetch(url);
	const data = await response.json();

	return data;
};

const getContinents = async () => {
	return await fetchData('https://igniteworldtrip.netlify.app/api/continents');
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
