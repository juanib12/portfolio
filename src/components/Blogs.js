import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const CATEGORIES = [
  { label: "Todas", value: "all" },
  { label: "Javascript", value: "javascript" },
  // Agregá más categorías si las necesitás
];

export default function Blogs({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <div className="blog-container bd-grid">
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>📝 Recursos y Guías para Desarrolladores</h2>
      <div style={{ marginBottom: "1rem" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            style={{
              marginRight: "0.5rem",
              padding: "0.5rem 1rem",
              background: selectedCategory === cat.value ? "#222" : "#eee",
              color: selectedCategory === cat.value ? "#fff" : "#222",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
      {filteredPosts.length === 0 ? (
        <p className="empty-state">
          No hay publicaciones aún. ¡Volvé más tarde!
        </p>
      ) : (
        <div className="posts-grid">
          {filteredPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="post-card">
                <h3>{post.title}</h3>
                <p>
                  {post.description
                    ? post.description
                    : post.content?.slice(0, 200) + "..."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
