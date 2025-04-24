import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import '../styles/panel.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error al obtener el post:', error);
      } else {
        setPost(data);
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
      <p className="blog-date">Publicado: {new Date(post.created_at).toLocaleDateString()}</p>
      <div className="blog-content">{post.content}</div>
    </div>
  );
}

export default BlogDetail;
