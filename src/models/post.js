// eslint-disable-next-line
import {get, post, update,deleted} from './requester';
// import {joinTeam} from './user';

function loadPosts(callback) {
    // Request teams from db
    get('appdata', 'posts', 'kinvey')
        .then(callback)
}

function loadPost(postId, onPostSuccess) {
    get('appdata', 'posts/' + postId, 'kinvey')
        .then(onPostSuccess);
}

// function loadUsersDetails(teamId, onUsersSuccess) {
//     get('user', `?query={"teamId": "${teamId}"}`, 'kinvey')
//         .then(onUsersSuccess);
// }

function edit(id, author, context, dateofpublish, callback) {
    console.log(id);
    let postData = {
        author: author,
        context: context,
        dateofpublish: dateofpublish
    };
    update('appdata', 'posts/' + id, postData, 'kinvey')
        .then(callback(true));
}

function create(author, context, dateofpublish, callback) {
    let postData = {
        author: author,
        context: context,
        dateofpublish: dateofpublish
    };
    post('appdata', 'posts', postData, 'kinvey')
        .then((response) => {
            loadPost(response._id, callback);
        });
}

function reload(index){
    deleted(index)
        .then((callback) => {
            loadPosts(callback);
        });
}

// export {loadTeams, loadPost, loadUsersDetails, edit, create};
export {loadPosts, loadPost, create, edit ,reload};