const schema = {
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Links',
      type: 'array',
      of: [{type: 'link'}],
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
export default schema
