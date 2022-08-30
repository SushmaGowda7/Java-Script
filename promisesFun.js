const posts = [
    {title: 'Post 1', body: 'This is post 1'},
    {title: 'Post 2', body: 'This is post 2'},
    {lastActivityTime: '30th of aug'}
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post);
    
            const error = false;
            if(!error){
                resolve();
            }else{
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

function deletePost(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.values !== 0){
                resolve(posts.pop());
            }
            else{
                reject('Array is empty');
            }
        }, 1000);

    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.lastActivityTime = new Date().getTime();
            resolve(posts.lastActivityTime)
        }, 1000);
    })
}

// createPost({title: 'Post 3', body: 'This is post 3'})
// .then(getPosts)
// .catch(err => console.log(err))
// .then(deletePost)
// .catch(err => console.log(err));

//Promise.all

function userUpdatePost(){
    Promise.all([createPost, updateLastUserActivityTime])
    .then(([createPostresolves, updateLastUserActivityTimeresolves]) => {
        console.log(updateLastUserActivityTimeresolves)
    } )
    .catch(err => console.log(err))
};


