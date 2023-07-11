const schema = {
  name: 'frontPageOccasionalRecipe',
  title: 'Front Page Occasional Recipe',
  type: 'object',
  fields: [
    {name: 'header', title: 'Header', type: 'string'},
    {
      name: 'content',
      title: 'Occasional Recipes',
      type: 'array',
      of: [{type: 'occasionalRecipe'}],
    },
  ],
  preview: {
    select: {
      title: 'header',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'occasional recipes',
      }
    },
  },
}
export default schema
