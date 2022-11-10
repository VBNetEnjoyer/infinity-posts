import api from "./api.js";
import createPost from './post.js';
import createComment from './comments.js';

async function createApp(){
    const app = document.querySelector("#app");
    const commentsNode = document.querySelector(".comments__body");

    const postId = new URLSearchParams(window.location.search).get("postId");

    let postItem = await api.getPost(postId);
    app.append(createPost(postItem, ()=>{})); 

    let comments = await api.getComments(postId);
    console.log(comments);
    comments.forEach(element => {
        commentsNode.append(createComment(element));
    });

    console.log(postId);
}
export default createApp;