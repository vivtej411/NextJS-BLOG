import BlogDetail from "@/components/blogs/BlogDetail";
import { getAllPostIds, getPostData } from "@/lib/posts";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const PostDetails = (props) => {
  const router = useRouter();

  // console.log(props);

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <div className="backbutton">
          <Link href="/" passHref>
            <button className="btn btn-secondary">
              <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
            </button>
          </Link>
        </div>
        <BlogDetail
          title={props.title}
          date={props.date}
          author={props.author}
          summary={props.summary}
        ></BlogDetail>
      </div>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const { PostId } = params;
  // console.log(PostId);
  const postData = await getPostData(PostId);

  // console.log(postData);

  return {
    props: {
      ...postData,
    },
  };
}

export async function getStaticPaths() {
  const { path } = getAllPostIds();

  return {
    paths: path,
    fallback: false,
  };
}

// export async function getStaticPath() {
//   const path = await getAllPostIds();
//   return {
//     path,
//     fallBack: false,
//   };
// }

export default PostDetails;
