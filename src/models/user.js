import * as requester from './requester';
import observer from './observer';


function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
    let username = userInfo.username;
    sessionStorage.setItem('username', username);

    observer.onSessionUpdate();
}

// user/login
function login(username, password, callback) {
    let userData = {
        username,
        password
    };

    requester.post('user', 'login', userData, 'basic')
        .then(loginSuccess)
        .catch((err) => (callback(false)));

    function loginSuccess(userInfo) {
        saveSession(userInfo);
        callback(true);
    }
}

// user/register
function register(username, password, email, callback) {
    let userData = {
        username,
        password,
        email
    };

    requester.post('user', '', userData, 'basic')
        .then(registerSuccess);

    function registerSuccess(userInfo) {
        observer.showSuccess('Successful registration.');
        saveSession(userInfo);
        callback(true);
    }
}

// user/logout
function logout(callback) {
    requester.post('user', '_logout', null, 'kinvey')
        .then(logoutSuccess);


    function logoutSuccess(response) {
        sessionStorage.clear();
        observer.onSessionUpdate();
        callback(true);
    }
}

// function joinTeam(teamId, callback) {
//     let userData = {
//         username: sessionStorage.getItem('username'),
//         teamId: teamId
//     };
//     requester.update('user', sessionStorage.getItem('userId'), userData, 'kinvey')
//         .then((response) => {
//             saveSession(response);
//             observer.onSessionUpdate();
//             callback(true);
//         });
// }

// function createPost(postId, callback) {
//     let userData = {
//         author: sessionStorage.getItem('username'),
//         postId: postId,
//         dateofpublish: new Date.now(),
//     };
//     requester.post('user', sessionStorage.getItem('userId'), userData, 'kinvey')
//         .then((response) => {
//             saveSession(response);
//             observer.onSessionUpdate();
//             callback(true);
//         });
// }

// function leaveTeam(callback) {
//     let userData = {
//         username: sessionStorage.getItem('username'),
//         teamId: ''
//     };
//     requester.update('user', sessionStorage.getItem('userId'), userData, 'kinvey')
//         .then((response) => {
//             saveSession(response);
//             observer.onSessionUpdate();
//             callback(true);
//         });
// }

// export {login, register, logout, joinTeam, leaveTeam};
export {login, register, logout};