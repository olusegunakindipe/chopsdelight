import {BiNavigation} from 'react-icons/bi'
import {StructureBuilder} from 'sanity/desk'

export const Landingpage = (S: StructureBuilder) =>
  S.listItem()
    .title('Landing page')
    .icon(BiNavigation)
    .child(S.documentTypeList('landingpage').title('Landingpage').filter('_type == "landingpage"'))
