import Head from "next/head";
import styles from "./index.module.css";
import Link from "next/link";

const PostsList = ({ posts }) => (
  <>
    <Head>
      <title>My Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className="d-flex justify-content-center py-3">
      {/* <Link className="nav-link">POKEMON</Link> */}
      <Link className="nav-link" href="/">
        HOME/
      </Link>
      <Link className="nav-link" href="/PostsList">
        POSTS LIST/
      </Link>
      <Link className="nav-link" href="/CreatePost">
        CREATE POST/
      </Link>
    </header>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          {" "}
          <h2>{post.title} </h2> <p>{post.body}</p>
        </li>
      ))}
    </ul>
  </>
);

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://isdi-blog-posts-api.herokuapp.com/posts");
  const posts = await res.json();

  // Pass data to the page via props
  return { props: { posts } };
}

export default PostsList;
