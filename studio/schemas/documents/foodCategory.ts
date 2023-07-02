const schema = {
  name: 'foodCategory',
  type: 'document',
  title: 'Food Categories',
  __experimental_actions: ['update', 'publish'],

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'links',
      title: 'Menu Items',
      type: 'array',
      of: [{type: 'link'}],
    },
  ],
}

export default schema
