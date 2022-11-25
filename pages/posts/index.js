import AllPosts from "../../components/posts/all-post";
import { getAllPosts } from "../../lib/post-util";
import Head from "next/head";

function AllPostsPage(props) {
  return (
    <>
      <Head>
        <title>All posts</title>
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
