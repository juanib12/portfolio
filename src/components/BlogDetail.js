import Breadcumb from '../../src/components/Breadcumb'
import Image from 'next/image';

export default function BlogDetail({ post }) {
  return (
    <div className="blog-container blog-detail bd-grid">
      <Breadcumb />
      <ul className="blog-meta">
        <li>
          <div>
            <Image src="/images/juani2.jpg" alt="profile" className="avatar" width={50} height={50}/>
            <span>Juan Ignacio Bianco</span>
          </div>
        </li>
        <li>
        {post.date && (
          <p className="blog-date">
            Publicado: {new Date(post.date).toLocaleDateString()}
          </p>
        )}
        </li>
      </ul>
      <h2>{post.title}</h2>
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
