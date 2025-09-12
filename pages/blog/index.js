import Head from 'next/head'
import Header from '../../src/components/Header'
import Blogs from '../../src/components/Blogs'
import Footer from '../../src/components/Footer'
import { fetchPosts } from "../../libs/posts";

export async function getStaticProps() {
  const posts = await fetchPosts();
  return {
    props: {
      posts,
    },
  };
}
export default function BlogPage({posts}) {
  return (
    <>
      <Head>
        <title>Blog - Juan Bianco</title>
        <meta name="description" content="Blog de Juan Bianco - Artículos sobre desarrollo" />
      </Head>
      <Header />
      <Blogs posts={posts}/>
      <Footer />
    </>
  )
}
