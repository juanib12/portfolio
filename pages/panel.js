import Head from 'next/head'
import Header from '../src/components/Header'
import PanelPosts from '../src/components/PanelPosts'
import Footer from '../src/components/Footer'
import QuotesBox from '../src/components/QuotesBox'

export default function PanelPage() {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925618271410880"
     crossorigin="anonymous"></script>
        <title>Panel - Juan Bianco</title>
        <meta name="description" content="Panel de administración de Juan Bianco" />
      </Head>
      <Header />
      <PanelPosts />
      <Footer />
    </>
  )
}
