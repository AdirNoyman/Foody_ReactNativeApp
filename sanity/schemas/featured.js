export default {
	name: 'featured',
	title: 'Featured Menu categories',
	type: 'document',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Featured Catgory name',
			validation: Rule => Rule.required(),
		},
		{
			name: 'short_description',
			type: 'string',
			title: 'Short description',
			validation: Rule => Rule.max(200),
		},
		{
			name: 'resteraunts',
			type: 'array',
			title: 'Resteraunts',
			validation: Rule => Rule.required(),
			of: [{ type: 'reference', to: [{ type: 'resteraunt' }] }],
		},
	],
};
