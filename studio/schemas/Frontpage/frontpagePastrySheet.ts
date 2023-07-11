const schema = {
  name: 'frontPagePastrySheet',
  title: 'Front Page Pastry Sheet',
  type: 'object',
  fields: [
    {name: 'header', title: 'Header', type: 'string'},
    {
      name: 'content',
      title: 'Pastry sheets',
      type: 'array',
      of: [{type: 'pastrySheet'}],
    },
  ],
  preview: {
    select: {
      title: 'header',
    },
    prepare({title}) {
      return {
        title,
        subtitle: 'pastry sheets',
      }
    },
  },
}
export default schema
