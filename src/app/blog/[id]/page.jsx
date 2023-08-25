import getSingleBlogPost from "@/lib/getSingleBlogPost";


const SingleBlog = async ({ params }) => {
    const id = params.id
    const post = await getSingleBlogPost(id);
    return (
        <div className="w-[50%] mx-auto mt-6">
            <h1 className="text-2xl font-bold text-center">{post.title}</h1>
            <p className="mt-4">{post.body}</p>
        </div>
    );
};

export default SingleBlog;
