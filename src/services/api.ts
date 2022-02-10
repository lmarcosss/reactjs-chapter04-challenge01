export async function fetchData<IData> (url: string): Promise<IData> {
	const response = await fetch(url);

	return response.json();
}