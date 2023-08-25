const getAllBlogData = async () => {
    const res = await fetch('https://basic-blog.teamrabbil.com/api/post-newest')
    const data = await res.json()
    if (!res.ok) {
        throw new Error('Something went wrong')
    }
    return data;
}

export default getAllBlogData;