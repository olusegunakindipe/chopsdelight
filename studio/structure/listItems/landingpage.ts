import {BiNavigation} from 'react-icons/bi'
import {StructureBuilder} from 'sanity/desk'

export const Landingpage = (S: StructureBuilder) =>
  S.listItem()
    .title('Landing page')
    .icon(BiNavigation)
    .child(S.documentTypeList('landingpage').title('Landingpage').filter('_type == "landingpage"'))

// export const Landingpage = (S: StructureBuilder) =>
//   S.listItem()
//     .title('Landing page')
//     .icon(BiNavigation)
//     .child(
//       S.list()
//         .title('Landing page types')
//         .items([
//           S.listItem()
//             .title('Taxonomy')
//             .icon(BiNavigation)
//             .child(
//               S.documentTypeList('landingpage')
//                 .title('Level 1')
//                 .filter('_type == "landingpage" && level == $level')
//                 .params({level: 1})
//                 .child((_id) =>
//                   S.documentTypeList('landingpage')
//                     .title('Lavel 2')
//                     .filter('_type == "landingpage" &&  parent._ref == $id && level == $level')
//                     .params({id: _id, level: 2})
//                 )
//             ),
//           S.listItem()
//             .title('Level 1')
//             .icon(BiDetail)
//             .schemaType('landingpage')
//             .child(
//               S.documentTypeList('landingpage')
//                 .title('Level 1')
//                 .filter('type == "landingpage" && level == $level')
//                 .params({level: 1})
//             ),
//           S.listItem()
//             .title('Level 2')
//             .icon(BiDetail)
//             .schemaType('landingpage')
//             .child(
//               S.documentTypeList('landingpage')
//                 .title('Level 1')
//                 .filter('type == "landingpage" && level == $level')
//                 .params({level: 2})
//             ),
//         ])
//     )
