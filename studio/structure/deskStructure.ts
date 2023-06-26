import {ConfigContext} from 'sanity'
import {StructureBuilder} from 'sanity/desk'
import {SiteConfig} from './listItems/siteConfig'
import {Frontpage} from './listItems/frontpage'
import {Landingpage} from './listItems/landingpage'

export const siteStructure = (S: StructureBuilder, context: ConfigContext) => {
  const dataset = context.dataset
  return S.list()
    .title(`Configuration: ${dataset}`)
    .items([SiteConfig(S), Frontpage(S), Landingpage(S)])
}
