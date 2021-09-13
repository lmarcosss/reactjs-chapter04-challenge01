import { NextApiResponse } from 'next';

export default async (_, res: NextApiResponse): Promise<void> => {
	res.status(200).json([
		{
			id: 1,
			name: 'Europa',
			thumbnail: 'europe',
			imageURL:
        'https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80',
		},
		{
			id: 2,
			name: 'América do Norte',
			thumbnail: 'north-america',
			imageURL:
        'https://images.unsplash.com/photo-1570897620586-a24d2d0b85cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
		},
		{
			id: 3,
			name: 'América do Sul',
			thumbnail: 'south-america',
			imageURL:
        'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80',
		},
		{
			id: 4,
			name: 'Ásia',
			thumbnail: 'asia',
			imageURL:
        'https://images.unsplash.com/photo-1574236170878-f66e35f83207?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
		},
		{
			name: 'África',
			thumbnail: 'africa',
			imageURL:
        'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3304&q=80',
		},
		{
			id: 5,
			name: 'Oceania',
			thumbnail: 'oceania',
			imageURL:
        'https://images.unsplash.com/photo-1539734710025-9ebbe24f22f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2FuZ2Fyb298ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
		},
	]);
};
