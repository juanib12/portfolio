import Breadcumb from '../../src/components/Breadcumb'

export default function BlogDetail({ post }) {
  return (
    <div className="blog-container blog-detail bd-grid">
      <Breadcumb />
      <h2>{post.title}</h2>
      {post.date && (
        <p className="blog-date">
          Publicado: {new Date(post.date).toLocaleDateString()}
        </p>
      )}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
