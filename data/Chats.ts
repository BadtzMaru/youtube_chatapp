export default {
	id: '1',
	users: [
		{
			id: 'u1',
			name: 'Vadim',
			imageUri: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=152637735,3689600067&fm=26&gp=0.jpg',
		},
		{
			id: 'u2',
			name: 'Lukas',
			imageUri: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1815250847,3573986215&fm=26&gp=0.jpg',
		},
	],
	messages: [
		{
			id: 'm1',
			content: 'How are you, Lukas!',
			createdAt: '2020-10-10T12:48:00.000Z',
			user: {
				id: 'u1',
				name: 'Vadim',
			},
		},
		{
			id: 'm2',
			content: 'I am good, good',
			createdAt: '2020-10-03T14:49:00.000Z',
			user: {
				id: 'u2',
				name: 'Lukas',
			},
		},
		{
			id: 'm3',
			content: 'What about you?',
			createdAt: '2020-10-03T14:49:40.000Z',
			user: {
				id: 'u2',
				name: 'Lukas',
			},
		},
		{
			id: 'm4',
			content: 'Good as well, preparing for the stream now.',
			createdAt: '2020-10-03T14:50:00.000Z',
			user: {
				id: 'u1',
				name: 'Vadim',
			},
		},
		{
			id: 'm5',
			content: 'How is your uni going?',
			createdAt: '2021-01-15T11:49:00.000Z',
			user: {
				id: 'u1',
				name: 'Vadim',
			},
		},
		{
			id: 'm6',
			content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
			createdAt: '2021-01-16T09:49:00.000Z',
			user: {
				id: 'u2',
				name: 'Lukas',
			},
		},
		{
			id: 'm7',
			content: 'Big Data is really interesting. Cannot wait to go through all the material.',
			createdAt: '2021-01-16T14:53:00.000Z',
			user: {
				id: 'u1',
				name: 'Vadim',
			},
		},
	],
};
