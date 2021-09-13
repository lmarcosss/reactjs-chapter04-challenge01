import {
	Box,
	Flex,
	Heading,
	Text,
	Button,
} from '@chakra-ui/react';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, {
	Navigation,
	Pagination,
	Mousewheel,
	Keyboard,
} from 'swiper/core';
import { useRouter } from 'next/router';
import { IContinent } from '../../types';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface IProps {
  continents: IContinent[];
}

export function Swiper({ continents }: IProps): JSX.Element {
	const router = useRouter();

	function goToContinent(thumbnail: string) {
		router.push(`continent/${thumbnail}`);
	}

	return (
		<Box px={['0', '10', '20']} py={['0', '10', '10']}>
			<SwiperReact
				navigation
				pagination
				mousewheel
				keyboard
				loop
			>
				{continents.map((continent) => (
					<SwiperSlide key={String(continent.id)}>
						<Button
							width="100%"
							height={[250, 300, 450]}
							onClick={() => goToContinent(continent.thumbnail)}
							_hover={{
								filter: 'brightness(0.7)',
							}}
							p="0"
						>
							<Flex
								align="center"
								justify="center"
								direction="column"
								backgroundImage={continent.imageURL}
								backgroundSize="cover"
								w="100%"
								height={[250, 300, 450]}
							>
								<Heading
									fontWeight="700"
									fontSize={['24', '36', '48']}
									color="white"
								>
									{continent.name}
								</Heading>
								<Text
									fontWeight="700"
									mt="2"
									fontSize={['14', '18', '24']}
									color="gray.200"
								>
									{continent.subtitle}
								</Text>
							</Flex>
						</Button>
					</SwiperSlide>
				))}
			</SwiperReact>
		</Box>
	);
}