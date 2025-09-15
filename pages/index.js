import Head from 'next/head'
import Header from '../src/components/Header'
import Home from '../src/components/Home'
import AboutMe from '../src/components/AboutMe'
import Footer from '../src/components/Footer'

export default function HomePage() {
  return (
    <>
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925618271410880"
     crossorigin="anonymous"></script>
        <title>Juan Bianco - Desarrollador FullStack</title>
        <meta name="description" content="Portfolio de Juan Bianco - Desarrollador FullStack" />
      </Head>
      <Header />
      <Home />
      <AboutMe />
      <Footer />
    </>
  )
}
