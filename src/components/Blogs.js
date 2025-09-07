import React, { useEffect, useState } from 'react';
import { getPosts } from '../services/posts';
import '../styles/panel.css';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const data = await getPosts();
        console.log(data);
        
        if(data && Array.isArray(data) && data.length > 0) {
          setPosts(data);
        }
      } catch (error) {
        console.error('Error al obtener posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <div className="blog-container bd-grid">
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝 Mis posts</h2>
      {loading ? (
        <p>Cargando publicaciones...</p>
      ) : posts.length === 0 ? (
        <p className='empty-state'>No hay publicaciones aún. ¡Volvé más tarde!</p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`}>
              <div key={post.id} className="post-card">
                <h3>{post.title}</h3>
                <p>{post.content.length > 200 ? post.content.slice(0, 200) + '...' : post.content}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;
