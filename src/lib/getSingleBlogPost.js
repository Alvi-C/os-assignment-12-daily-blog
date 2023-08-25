const getSingleBlogPost = async (id) => {
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error('Error fetching posts')
    }
    return data;
}

export default getSingleBlogPost;