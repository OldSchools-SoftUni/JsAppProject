import React, {Component} from 'react';
// import {Link} from 'react-router';

export default class HomePage extends Component {
    render() {
        let message = <p>You are currently not logged in. Please, log in or register to view team options.</p>;

        if (sessionStorage.getItem('username')) {
            if (true) {
                message = <p>You are logged in!</p>
            } else {
                message = <p>You are not logged in!</p>
            }
        }
        return (
            <div>
                <h1>Home Page</h1>
                {message}
            </div>
        );
    }
}