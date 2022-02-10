import { NextApiRequest, NextApiResponse } from 'next';
import { fetchData } from '../../../services/api';
import { IContinent } from '../../../types';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	const data = await fetchData<IContinent[]>(`${process.env.API_ENDPOINT}/continents`);

	const { slug } = req.query;

	const continent = data.find((item) => item.slug === slug);

	res.status(200).json(continent);
};