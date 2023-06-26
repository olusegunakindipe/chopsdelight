const schema = {
  name: 'landingPageBanner',
  title: 'Landing Page Banner',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'imageAsset',
      validation: (Rule: any) => Rule.optional(),
    },
  ],
  preview: {
    select: {
      title: 'image.caption',
      media: 'image.asset',
    },
    prepare({title, media}: any) {
      return {
        title,
        subtitle: 'Landing page banner',
        media,
      }
    },
  },
}
export default schema
