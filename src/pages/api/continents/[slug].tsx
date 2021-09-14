import { NextApiResponse } from 'next';

export default async (_, res: NextApiResponse): Promise<void> => {
	res.status(200).json([]);
};