import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'

import {siteStructure} from './structure/deskStructure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  title: 'chopsdelight',
  name: 'chopsdelight',
  dataset: 'production',
  projectId: '8clsqhci',

  plugins: [deskTool({structure: siteStructure})],
  schema: {
    types: schemas,
  },
})
