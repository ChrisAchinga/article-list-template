import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/layouts/Layout'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  )
}

// get data from /post folder
export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  // console.log(files)
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    // console.log(markdownWithMeta)
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  // console.log(posts)

  return {
    props: {
      posts,
    },
  }
}
