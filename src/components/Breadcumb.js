import Link from "next/link";

const Breadcumb = () => {
  return (
    <nav className="breadcumb">
    <ul className="breadcumb_list">
        <li className="breadcumb_item">
        <Link href="/blog" className={`breadcumb_link`} >
        Volver a Blogs
        </Link>
        </li>
    </ul>
    </nav>
  );
};

export default Breadcumb;
