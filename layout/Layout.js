import Head from 'next/head'
import Header from '@/components/Header'

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <title>{title}</title>
      </Head>
      <Header />
      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: 'The DevSpace Blog',
  keywords: 'programming, javascript, tutorials',
  description: 'A programmers website to read',
}
