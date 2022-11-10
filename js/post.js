function createPostElement(postItem, onPostClick){
    const postNode = document.createElement('div');
    postNode.classList.add('post-item');

    const postBodyNode = document.createElement('div');
    postBodyNode.classList.add('post-item__body');

    const postTitleNode = document.createElement('h3');
    postTitleNode.classList.add('post-item__title');
    postTitleNode.textContent = postItem.title;

    const postTextNode = document.createElement('p');
    postTextNode.classList.add('post-item__text');
    postTextNode.textContent = postItem.body;

    postBodyNode.append(postTitleNode);
    postBodyNode.append(postTextNode);
    postNode.append(postBodyNode);

    postNode.addEventListener('click', ()=>{
        onPostClick(postItem.id)
    });

    return postNode;
}

export default createPostElement;