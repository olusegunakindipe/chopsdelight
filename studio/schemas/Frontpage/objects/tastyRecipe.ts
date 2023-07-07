const schema = {
  name: 'tastyRecipe',
  title: 'Tasty Recipe',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: any) => Rule.optional(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageAsset',
      validation: (Rule: any) => Rule.optional(),
    },
  ],
}
export default schema
