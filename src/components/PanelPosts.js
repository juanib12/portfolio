import React, { useEffect, useState } from 'react';
import { getPosts, createPost, updatePost, deletePost } from '../services/posts';
import { functions } from '../utils/functions';

const PanelPosts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleCreate = async () => {
    if (!title || !content) return;

    const slug = functions.makeSlug(title);

    await createPost(title, content, slug);
    setTitle('');
    setContent('');
    fetchPosts();
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts();
  };

  return (
    <div className="blog-container bd-grid">
      <h2>Nuevo Post</h2>
      <input
        type="text"
        placeholder="Título del post"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Contenido del post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleCreate}>Publicar</button>

      <h2>Posts recientes</h2>
      {posts.length === 0 ? (
        <p className='empty-state'>No hay posts aún. ¡Sé el primero en publicar!</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleDelete(post.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
}

export default PanelPosts;
