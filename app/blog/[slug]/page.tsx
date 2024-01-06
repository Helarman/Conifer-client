import getPostById from "../../actions/getPostById"



const PostPage =  async ({ params }: { params: { slug: string } }) =>{
    const postData = await getPostById(params)
    const post = postData.post.attributes
    return(
        <>
        <h1>{post.title}</h1>
        </>
    )
}

export default PostPage