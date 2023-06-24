import {BiBuildingHouse} from 'react-icons/bi'
import {StructureBuilder} from 'sanity/desk'

export const Frontpage = (S: StructureBuilder) =>
  S.listItem()
    .title('Front page')
    .icon(BiBuildingHouse)
    .child(S.documentTypeList('frontpage').title('Frontpage').filter('_type == "frontpage"'))
