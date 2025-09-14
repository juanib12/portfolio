import Breadcumb from '../../src/components/Breadcumb'
import Image from 'next/image';

export default function BlogDetail({ post }) {
  const shareOnLinkedin = () => {
    const url = encodeURIComponent(window.location.href);
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(linkedinUrl, '_blank');
  }

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this blog post: ${post.title}`);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(twitterUrl, '_blank');
  }

  return (
    <div className="blog-container blog-detail bd-grid">
      <Breadcumb />
      <ul className="blog-meta">
        <li>
          <div>
          <a href="https://github.com/juanib12" className="github" target="_blank" rel="noopener noreferrer">
            <Image src="/images/juani2.jpg" alt="profile" className="avatar" width={50} height={50}/>
            <span>Juan Ignacio Bianco</span>
          </a>
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

      <footer className="blog-footer">
        <button className="share-button linkedin" onClick={shareOnLinkedin} title="Share on LinkedIn">
          <Image src="/images/linkedin.png" alt="LinkedIn" width={20} height={20}/>
          Compartir en LinkedIn
        </button>
        <button className="share-button twitter" onClick={shareOnTwitter} title="Share on Twitter">
          <Image src="/images/x.svg" alt="Twitter" width={20} height={20}/>
          Compartir en X
        </button>
      </footer>
    </div>
  );
}
