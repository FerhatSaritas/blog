// import { Badge, Divider, PageTransitionWrapper } from "../../_components/atoms";
// import Image from "next/image";
// // The page for each post
// export default async function MdxLayout(children) {
//   return (
//     <PageTransitionWrapper>
//       <article className='prose prose-lg font-mono xl:prose-xl max-w-none prose-h4:text-neutral-600 prose-h4:m-0 prose-img:rounded-lg prose-h1:underline prose-a:text-primary xl:w-9/12 mx-auto'>
//         { bannerImage && (
//           <Image alt='Banner Image' src={ bannerImage as string } />
//         ) }
//         <h1>{ title }</h1>
//         <div className='mb-2'>
//           <h4>
//             { new Date(date).toLocaleDateString("de-DE", {
//               year: "numeric",
//               month: "long",
//               day: "2-digit",
//             }) }
//           </h4>
//         </div>
//         <span className='flex flex-row'>
//           { tags.map((tag: string) => (
//             <Badge key={ tag } color='primary'>
//               { tag }
//             </Badge>
//           )) }
//         </span>
//         <Divider />
//         { content && <Markdown>{ content }</Markdown> }
//       </article>
//     </PageTransitionWrapper>
//   );
// }

