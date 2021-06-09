import fs from 'fs'
import path from 'path'
import Layout from '@/layouts/Layout'

export default function Home() {
  return (
    <Layout>
      <h1>Hello World</h1>
    </Layout>
  )
}

// get data from /post folder
export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))

  console.log(files)

  return {
    props: {},
  }
}
