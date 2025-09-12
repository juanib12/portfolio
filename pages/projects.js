import Head from 'next/head'
import Header from '../src/components/Header'
import Projects from '../src/components/Projects'
import Footer from '../src/components/Footer'
import QuotesBox from '../src/components/QuotesBox'

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Proyectos - Juan Bianco</title>
        <meta name="description" content="Proyectos desarrollados por Juan Bianco" />
      </Head>
      <Header />
      <Projects />
      <Footer />
    </>
  )
}
