import {BiFoodTag} from 'react-icons/bi'
import {StructureBuilder} from 'sanity/desk'

export const FoodCategory = (S: StructureBuilder) =>
  S.listItem()
    .title('Food Categories')
    .icon(BiFoodTag)
    .child(
      S.documentTypeList('foodCategory').title('Food Categories').filter('_type == "foodCategory"')
    )
