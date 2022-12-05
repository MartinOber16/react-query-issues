import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization:
			'Bearer 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',
	},
});
