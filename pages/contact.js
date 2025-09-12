import Head from 'next/head'
import Header from '../src/components/Header'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'
import QuotesBox from '../src/components/QuotesBox'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contacto - Juan Bianco</title>
        <meta name="description" content="Información de contacto de Juan Bianco" />
      </Head>
      <Header />
      <Contact />
      <Footer />
    </>
  )
}
