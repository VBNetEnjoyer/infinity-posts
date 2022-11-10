function createComment(commentItem){
    const commentNode = document.createElement('div');
    commentNode.classList.add('comment-item');

    const commentBody = document.createElement('div');
    commentBody.classList.add('comment-item__body');

    const commentName = document.createElement('h3');
    commentName.classList.add('comment-item__name');
    commentName.textContent = `${commentItem.name}`;

    const commentEmail = document.createElement('h6');
    commentEmail.classList.add('comment-item__email');
    commentEmail.textContent = `${commentItem.email}`;

    const commentText = document.createElement('p');
    commentText.classList.add('comment-item__text');
    commentText.textContent = commentItem.body;

    commentBody.append(commentName);
    commentBody.append(commentEmail);
    commentBody.append(commentText);
    commentNode.append(commentBody);

    return commentNode;
};

export default createComment