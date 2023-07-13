const schema = {
  name: 'frontpage',
  type: 'document',
  title: 'Front page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Front page sections',
      type: 'array',
      of: [
        {type: 'landingPageBanner'},
        {
          type: 'frontPageTastyRecipe',
        },
        {
          type: 'frontPageOccasionalRecipe',
        },
        {
          type: 'frontPagePastrySheet',
        },
        {
          type: 'frontPagePastryInspiration',
        },
      ],
      validation: (Rule: any) => Rule.optional(),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}

export default schema
