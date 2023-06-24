const schema = {
  name: 'imageAsset',
  title: 'Image asset',
  type: 'object',
  fields: [
    {
      name: 'asset',
      title: 'Asset',
      type: 'image',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
    {
      title: 'Alternative text',
      name: 'alt',
      type: 'string',
      description: 'This is important for SEO',
    },
  ],
  preview: {
    select: {
      caption: 'caption',
      subtitle: 'alt',
    },
  },
}
export default schema
