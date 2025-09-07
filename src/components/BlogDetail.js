import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/panel.css';
import { getPosts } from '../services/posts';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPosts();
      console.log(data);
      const postFilter = data.find(p => p.slug === slug);

      if (!postFilter) {
        console.error('Error al obtener el post:', postFilter);
      } else {
        setPost(postFilter);
      }
      setLoading(false);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <div className="blog-container">Cargando post...</div>;
  }

  if (!post) {
    return <div className="blog-container">Post no encontrado.</div>;
  }

  return (
    <div className="blog-container blog-detail bd-grid">
      <h2>{post.title}</h2>
      {/* <p className="blog-date">Publicado: {new Date(post.created_at).toLocaleDateString()}</p> */}
      <div className="blog-content">{post.content}</div>
    </div>
  );
}

export default BlogDetail;
