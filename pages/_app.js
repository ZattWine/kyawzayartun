import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='mx-auto w-9/12'>
        <Navigation />
      </div>
      <div className='mx-auto w-9/12 min-h-screen'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
