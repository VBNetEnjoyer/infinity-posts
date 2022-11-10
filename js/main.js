import createPost from './post.js';
import api from './api.js';

async function createApp(){
    const page = document.documentElement;
    const app = document.querySelector('#app');
    let pageIndex = 1;

    const addPost = async function(pageIndex=1){
        let postsList = await api.getPosts(pageIndex);
        postsList.forEach(element => {
            app.append(createPost(element, onPostClick)); 
        });
    }
    addPost(pageIndex); 

    document.addEventListener(`scroll`, (e)=>{
        if(page.scrollHeight - Math.round(page.scrollTop) === page.clientHeight) addPost(++pageIndex);
    });

    async function onPostClick(postId){
        let post = await api.getPost(postId);
        window.location.href = `../post.html?postId=${postId}`;
    }
}

export default createApp;