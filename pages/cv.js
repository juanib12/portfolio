import Head from 'next/head'
import Header from '../src/components/Header'
import CV from '../src/components/CV'
import Footer from '../src/components/Footer'
import QuotesBox from '../src/components/QuotesBox'

export default function CVPage() {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925618271410880"
     crossorigin="anonymous"></script>
        <title>CV - Juan Bianco</title>
        <meta name="description" content="Currículum Vitae de Juan Bianco" />
      </Head>
      <Header />
      <CV />
      <Footer />
    </>
  )
}
