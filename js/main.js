import createPost from './post.js'

const URL = "https://gorest.co.in/public-api/posts";

async function createApp(){
    const page = document.documentElement;
    const app = document.querySelector('#app');
    let pageIndex = 1;

    const addPost = async function(pageIndex=1){
        let postsList = await getPosts(pageIndex);
        postsList.forEach(element => {
            app.append(createPost(element, onPostClick)); 
        });
    }
    addPost(pageIndex); 

    document.addEventListener(`scroll`, (e)=>{
        if(page.scrollHeight - Math.round(page.scrollTop) === page.clientHeight) addPost(++pageIndex);
    });

    async function onPostClick(postId){
        let post = await getPost(postId);
        console.log(post);
    }
    
}

async function getPosts(pageIndex = 1){
    let response = await fetch(URL+`?page=${pageIndex}`);
    let postsList = (await response.json()).data;

    return postsList; 
}

async function getPost(postId){
    let response = await fetch(URL+`/${postId}`);
    let post = (await response.json()).data;

    return post;
}



createApp();