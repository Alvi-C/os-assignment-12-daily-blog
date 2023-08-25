const getAllBlogData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    if (!res.ok) {
        throw new Error('Something went wrong')
    }
    return data;
}

export default getAllBlogData;