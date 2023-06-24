const schema = {
  name: 'site-config',
  type: 'document',
  title: 'Site configuration',
  __experimental_actions: ['update', 'publish'],
  fieldset: [
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'footer',
      title: 'Footer',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      title: 'Brand logo',
      description: 'Try and use SVG Images',
      name: 'logo',
      type: 'imageAsset',
    },
    // {
    //   title: 'Header Items',
    //   name: 'headerNavigation',
    //   type: 'array',
    // },
  ],
}

export default schema
