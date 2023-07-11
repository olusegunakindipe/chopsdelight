const schema = {
  name: 'pastrySheet',
  title: 'Pastry Sheet',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'imageAsset',
      validation: (Rule: any) => Rule.optional(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {name: 'cta', title: 'cta', type: 'link'},
  ],
}
export default schema
