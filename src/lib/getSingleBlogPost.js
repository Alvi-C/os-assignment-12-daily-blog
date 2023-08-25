const getSingleBlogPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    if (!res.ok) {
        throw new Error('Error fetching posts')
    }
    return data;
}

export default getSingleBlogPost;