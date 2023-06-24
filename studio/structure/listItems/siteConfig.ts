import {BiWrench} from 'react-icons/bi'
import {StructureBuilder} from 'sanity/desk'

export const SiteConfig = (S: StructureBuilder) =>
  S.listItem()
    .title('Site config')
    .icon(BiWrench)
    .child(S.documentTypeList('site-config').title('Site Config').filter('_type == "site-config"'))
