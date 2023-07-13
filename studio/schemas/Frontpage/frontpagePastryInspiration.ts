const schema = {
  name: 'frontPagePastryInspiration',
  title: 'Front Page Pastry Inspiration',
  type: 'object',
  fields: [
    {name: 'header', title: 'Header', type: 'string'},
    {name: 'description', title: 'Description', type: 'string'},
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'imageAsset'}],
    },
    {name: 'cta', title: 'cta', type: 'link'},
  ],
  preview: {
    select: {
      title: 'header',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'pastry inspiration',
      }
    },
  },
}
export default schema
