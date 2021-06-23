import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <></>}
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'Kyaw Zayar Tun | Personal portfolio page',
  description: 'The personal profile site.',
  keywords: 'developer, software developer, myanmar, b.c.sc, ucsy',
}
