const schema = {
  name: 'occasionalRecipe',
  title: 'Occasional Recipe',
  type: 'object',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {name: 'cta', title: 'cta', type: 'link'},
    {
      name: 'image',
      title: 'Image',
      type: 'imageAsset',
      validation: (Rule: any) => Rule.optional(),
    },
  ],
}
export default schema
