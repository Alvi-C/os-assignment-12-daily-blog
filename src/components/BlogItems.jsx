
import getAllBlogData from "@/lib/getAllBlogData";
import Link from "next/link";

const BlogItems = async () => {

	const blogList = await getAllBlogData()

    return (
			<div className='flex flex-wrap gap-6 justify-center mt-10'>
				{blogList.map(blog => (
					<div
						key={blog.id}
						className='w-[350px] h-[100px] border border-slate-200 rounded-lg p-5 hover:shadow-md hover:bg-blue-200'
					>
						<Link href={`/blog/${blog.id}`}>
							<h1 className='text-base font-bold mb-4'>{blog.title}</h1>
						</Link>
					</div>
				))}
			</div>
		)
};

export default BlogItems;

