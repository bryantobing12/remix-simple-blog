import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getPost } from "~/post";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "expected params.slug");
  return getPost(params.slug);
};

const PostSlugPage = () => {
  const post = useLoaderData();

  return <div dangerouslySetInnerHTML={{ __html: post.html }} />;
};

export default PostSlugPage;
