import Head from 'next/head'
import Header from '../src/components/Header'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import QuotesBox from '../src/components/QuotesBox'

export default function ContactPage() {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925618271410880"
     crossorigin="anonymous"></script>
        <title>Contacto - Juan Bianco</title>
        <meta name="description" content="Información de contacto de Juan Bianco " />
      </Head>
      <Header />
      <Contact />
      <Footer />
    </>
  )
}
