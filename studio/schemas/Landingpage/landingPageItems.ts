const schema = {
  name: 'landingpageItems',
  type: 'object',
  title: 'Landingpage Items',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'landingpage',
      title: 'Landingpage',
      type: 'reference',
      to: [{type: 'landingpage'}],
      validation: (Rule: any) => Rule.optional(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

export default schema
