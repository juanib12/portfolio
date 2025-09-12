import Link from "next/link";

export default function Blogs({ posts }) {
  console.log(posts)
  return (
    <div className="blog-container bd-grid">
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>📝 Mis posts</h2>
      {posts.length === 0 ? (
        <p className="empty-state">
          No hay publicaciones aún. ¡Volvé más tarde!
        </p>
      ) : (
        <div className="posts-grid">
          {posts.map((post) => (
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
