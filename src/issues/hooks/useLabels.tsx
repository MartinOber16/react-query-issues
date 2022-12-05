import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';
import { Label } from '../interfaces/label';

const getLabels = async (): Promise<Label[]> => {
	await sleep(2);

	// const res = await fetch('https://api.github.com/repos/facebook/react/labels');
	// const data = await res.json();
	const { data } = await githubApi.get<Label[]>('/labels', {
		headers: {
			Authorization: null,
		},
	});
	return data;
};

export const useLabels = () => {
	const labelsQuery = useQuery(['labels'], getLabels, {
		// refetchOnWindowFocus: false,
		staleTime: 1000 * 60 * 60, // 1 hora
		// initialData: [],
		placeholderData: [
			{
				id: 791921801,
				node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
				url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
				name: '❤️',
				color: 'ffffff',
				default: false,
			},
			{
				id: 69105383,
				node_id: 'MDU6TGFiZWw2OTEwNTM4Mw==',
				url: 'https://api.github.com/repos/facebook/react/labels/Browser:%20IE',
				name: 'Browser: IE',
				color: 'c7def8',
				default: false,
			},
		],
	});

	return labelsQuery;
};
