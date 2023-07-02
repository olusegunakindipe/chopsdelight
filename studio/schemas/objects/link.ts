const schema = {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
    },
    {
      name: 'externalLink',
      title: 'External Link',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
export default schema
