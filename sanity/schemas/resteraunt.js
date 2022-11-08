export default {
	name: 'resteraunt',
	title: 'Resteraunt',
	type: 'document',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Resteraunt name',
			validation: Rule => Rule.required(),
		},
		{
			name: 'short_description',
			type: 'string',
			title: 'Short description',
			validation: Rule => Rule.max(200),
		},
		{
			name: 'image',
			type: 'image',
			title: 'Image of the resteraunt',
		},
		{
			name: 'lat',
			type: 'number',
			title: 'Latitude of the resteraunt',
		},
		{
			name: 'lng',
			type: 'number',
			title: 'Longitude of the resteraunt',
		},
		{
			name: 'address',
			type: 'string',
			title: 'Resteraunt address',
			validation: Rule => Rule.required(),
		},
		{
			name: 'rating',
			type: 'number',
			title: 'Enter a rating from 1 to 5 stars',
			validation: Rule =>
				Rule.required()
					.min(1)
					.max(5)
					.error('Please enter a value between 1 and 5'),
		},
		{
			name: 'type',
			type: 'string',
			title: 'Category',
			validation: Rule => Rule.required(),
			type: 'reference',
			to: [{ type: 'category' }],
		},
		{
			name: 'dishes',
			type: 'array',
			title: 'Dishes',
			validation: Rule => Rule.required(),
			of: [{ type: 'reference', to: [{ type: 'dish' }] }],
		},
	],
};
