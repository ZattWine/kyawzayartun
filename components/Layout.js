import Head from 'next/head'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'
import HeroSection from './Hero'

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
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        transition={{ delay: 0.2 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        {router.pathname === '/about' && <HeroSection />}
        <Container>{children}</Container>
      </motion.div>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'Kyaw Zayar Tun | Personal portfolio page',
  description: 'The personal profile site.',
  keywords: 'developer, software developer, myanmar, b.c.sc, ucsy',
}
