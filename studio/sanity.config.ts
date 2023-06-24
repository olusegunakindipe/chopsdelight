import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import schemas from './schemas/schema'
import {siteStructure} from './structure/deskStructure'
export default defineConfig({
  name: 'Chops-delight',
  title: 'ChopsDelight',
  projectId: '8clsqhci',
  dataset: 'production',
  structure: siteStructure,

  plugins: [deskTool({structure: siteStructure}), visionTool()],

  schema: {
    types: schemas,
  },
})
