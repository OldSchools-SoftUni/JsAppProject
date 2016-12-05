import React, {Component} from 'react';
import Post from './Post';
import {loadPosts} from '../../models/post';
import {Link} from 'react-router';
//import observer from '../../models/observer';

export default class CatalogPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.bindEventHandlers();
    }

    bindEventHandlers() {
        this.onLoadSuccess = this.onLoadSuccess.bind(this);
    }

    onLoadSuccess(response) {
        // Display posts

        this.setState({posts: response})

    }

    componentDidMount() {
        // Request list of posts from the server
        loadPosts(this.onLoadSuccess);
    }

    render() {
        let createLink = null;
        if (!sessionStorage.getItem('postId')) {
            createLink = <Link to="/create" className="btn btn-default">Create post</Link>
        }

        return (
            <div>
                <h1>Catalog Page</h1>
                {createLink}
                <div>
                    <table className="table table-striped">
                        <tbody>
                        <tr>
                            <th>Post #</th>
                            <th>Author</th>
                            <th>Context</th>
                            <th>Date of publish</th>
                        </tr>
                    {this.state.posts.map((e, i) => {
                        return(
                            <Post
                                number = {++i}
                                key={++i}
                                author={e.author}
                                id={e._id}
                                context={e.context}
                                dateofpublish={e.dateofpublish}/>
                        )
                    })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
// <div>
//     <h1>Catalog Page</h1>
//     {createLink}
//     <div>
//         {this.state.posts.map((e, i) => {
//             return <Post key={i} author={e.author} id={e._id} context={e.context}/>
//         })}
//     </div>
// </div>