// 'use server'
// import axios from 'axios'

// const FALLBACK_POSTS = [
//   {
//     id: '1',
//     title: 'Sample Post 1',
//     image: '/images/sample1.jpg',
//     content: '<p>This is sample content for post 1.</p>',
//     createdAt: new Date(),
//   },
//   {
//     id: '2',
//     title: 'Sample Post 2',
//     image: '/images/sample2.jpg',
//     content: '<p>This is sample content for post 2.</p>',
//     createdAt: new Date(),
//   },
// ]

// export const onGetBlogPosts = async () => {
//   try {
//     const postsUrl = process.env.CLOUDWAYS_POSTS_URL
//     const featuredImages = process.env.CLOUDWAYS_FEATURED_IMAGES_URL

//     if (!postsUrl || !featuredImages) {
//       console.warn('CMS URLs not set, returning fallback posts.')
//       return FALLBACK_POSTS
//     }

//     const postsRes = await axios.get(postsUrl)
//     const postsData = postsRes.data

//     if (!postsData || postsData.length === 0) {
//       console.warn('No posts found, returning fallback posts.')
//       return FALLBACK_POSTS
//     }

//     const postArray = await Promise.all(
//       postsData.map(async (post: any) => {
//         try {
//           const imageRes = await axios.get(`${featuredImages}/${post.featured_media}`)
//           return {
//             id: post.id,
//             title: post.title.rendered,
//             image: imageRes.data.media_details?.file || '/images/sample1.jpg',
//             content: post.content.rendered,
//             createdAt: new Date(post.date),
//           }
//         } catch {
//           return {
//             id: post.id,
//             title: post.title.rendered,
//             image: '/images/sample1.jpg',
//             content: post.content.rendered,
//             createdAt: new Date(post.date),
//           }
//         }
//       })
//     )

//     return postArray.length > 0 ? postArray : FALLBACK_POSTS
//   } catch (error) {
//     console.error('Failed to fetch posts, returning fallback:', error)
//     return FALLBACK_POSTS
//   }
// }

// export const onGetBlogPost = async (id: string) => {
//   try {
//     const postUrl = process.env.CLOUDWAYS_POSTS_URL
//     if (!postUrl) throw new Error('Posts URL not set')

//     const postRes = await axios.get(`${postUrl}/${id}`)
//     const post = postRes.data
//     if (!post) throw new Error('Post not found')

//     const authorUrl = process.env.CLOUDWAYS_USERS_URL
//     const authorRes = authorUrl ? await axios.get(`${authorUrl}${post.author}`) : null

//     return {
//       id: post.id,
//       title: post.title.rendered,
//       content: post.content.rendered,
//       createdAt: new Date(post.date),
//       author: authorRes?.data?.name || 'Admin',
//     }
//   } catch (error) {
//     console.warn('Failed to fetch single post, returning fallback.')
//     return {
//       id: '1',
//       title: 'Sample Post',
//       content: '<p>This is sample post content.</p>',
//       createdAt: new Date(),
//       author: 'Admin',
//     }
//   }
// }




// // 'use server'
// // import axios from 'axios'

// // export const onGetBlogPosts = async () => {
// //   try {
// //     const postArray: {
// //       id: string
// //       title: string
// //       image: string
// //       content: string
// //       createdAt: Date
// //     }[] = []
// //     const postsUrl = process.env.CLOUDWAYS_POSTS_URL
// //     if (!postsUrl) {
// //       console.error('CLOUDWAYS_POSTS_URL is not set. Skipping blog post fetch.')
// //       return []
// //     }
// //     const posts = await axios.get(postsUrl)
// //     const featuredImages = process.env.CLOUDWAYS_FEATURED_IMAGES_URL
// //     if (!featuredImages) {
// //       console.error('CLOUDWAYS_FEATURED_IMAGES_URL is not set. Skipping image fetch.')
// //       return []
// //     }

// //     let i = 0
// //     while (i < posts.data.length) {
// //       const image = await axios.get(
// //         `${featuredImages}/${posts.data[i].featured_media}`
// //       )
// //       if (image) {
// //         //we push a post object into the array
// //         console.log(image.data.media_details)
// //         const post: {
// //           id: string
// //           title: string
// //           image: string
// //           content: string
// //           createdAt: Date
// //         } = {
// //           id: posts.data[i].id,
// //           title: posts.data[i].title.rendered,
// //           image: image.data.media_details.file,
// //           content: posts.data[i].content.rendered,
// //           createdAt: new Date(posts.data[i].date),
// //         }
// //         postArray.push(post)
// //       }
// //       i++
// //     }

// //     if (posts.data) {
// //       return postArray
// //     }
// //   } catch (error) {
// //     console.log(error)
// //   }
// // }

// // export const onGetBlogPost = async (id: string) => {
// //   try {
// //     const postUrl = process.env.CLOUDWAYS_POSTS_URL
// //     if (!postUrl) return
// //     const post = await axios.get(`${postUrl}/${id}`)
// //     if (post.data) {
// //       const authorUrl = process.env.CLOUDWAYS_USERS_URL
// //       if (!authorUrl) return
// //       const author = await axios.get(`${authorUrl}${post.data.author}`)
// //       if (author.data) {
// //         return {
// //           id: post.data.id,
// //           title: post.data.title.rendered,
// //           content: post.data.content.rendered,
// //           createdAt: new Date(post.data.date),
// //           author: author.data.name,
// //         }
// //       }
// //     }
// //   } catch (error) {
// //     console.log(error)
// //   }
// // }