import Head from 'next/head'
import Header from '../src/components/Header'
import CV from '../src/components/CV'
import Footer from '../src/components/Footer'
import QuotesBox from '../src/components/QuotesBox'

export default function CVPage() {
  return (
    <>
      <Head>
        <title>CV - Juan Bianco</title>
        <meta name="description" content="Currículum Vitae de Juan Bianco" />
      </Head>
      <Header />
      <CV />
      <Footer />
    </>
  )
}
