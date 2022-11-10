export default(()=>{
    const POST_URL = "https://gorest.co.in/public-api/posts";
    const COMMENTS_URL = "https://gorest.co.in/public-api/comments";

    async function getPosts(pageIndex = 1){
        let response = await fetch(POST_URL+`?page=${pageIndex}`);
        let postsList = (await response.json()).data;
    
        return postsList; 
    }
    
    async function getPost(postId){
        let post = {title: "No Post"}
        let response = await fetch(POST_URL+`/${postId}`);

        if(response.ok){
            post = (await response.json()).data;
        } 
    
        return post;
    }

    async function getComments(postId){
        let response = await fetch(COMMENTS_URL+`?post_id=${postId}`);
        let comments = (await response.json()).data;

        return comments;
    }

    return{
        getPosts,
        getPost,
        getComments,
    }
})()