import { extendTheme } from '@chakra-ui/react';
import componentsStyles from '../components/styles';

export const theme = extendTheme({
	fonts: {
		heading: 'Poppins',
		body: 'Poppins',
	},
	styles: {
		global: {
			body: {
				bg: '#F5F8FA',
				color: 'gray.600',
			},
			html: {
				scrollBehavior: 'smooth',
				overflowY: 'auto',
			},
			...componentsStyles,
		},
	},
});
