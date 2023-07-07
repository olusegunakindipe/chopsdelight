const schema = {
  name: 'frontPageTastyRecipe',
  title: 'Front page tasty recipe',
  type: 'object',
  fields: [
    {name: 'header', title: 'Header', type: 'string'},
    {
      name: 'content',
      title: 'Tasty Recipes',
      type: 'array',
      of: [{type: 'tastyRecipe'}],
    },
  ],
  preview: {
    select: {
      title: 'header',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'Front page tasty recipes',
      }
    },
  },
}
export default schema
