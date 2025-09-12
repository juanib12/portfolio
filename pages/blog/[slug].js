import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../../src/components/Header'
import BlogDetail from '../../src/components/BlogDetail'
import Footer from '../../src/components/Footer'
import { fetchPosts, fetchPostBySlug } from "../../libs/posts";
import { remark } from "remark";
import html from "remark-html";

export async function getStaticPaths() {
  const posts = await fetchPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // Si el slug no existe → 404
  };
}

export async function getStaticProps({ params }) {
  const post = await fetchPostBySlug(params.slug);

  // Convertir Markdown a HTML
  const processedContent = await remark()
    .use(html)
    .process(post.content || "");
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        ...post,
        contentHtml,
      },
    },
  };
}

export default function BlogDetailPage({post}) {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>Blog - {slug} - Juan Bianco</title>
        <meta name="description" content={`Artículo del blog: ${slug}`} />
      </Head>
      <Header />
      <BlogDetail post={post}/>
      <Footer />
    </>
  )
}
