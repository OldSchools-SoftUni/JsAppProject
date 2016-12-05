import React, {Component} from 'react';
import {Link} from 'react-router';
import './Post.css';
import PostControls from './PostControls';

export default class Post extends Component {

    render() {
        return (
            <tr key={this.props.number}>
                <td>{this.props.number}</td>
                <td>{this.props.author}</td>
                <td>{this.props.context}</td>
                <td>{this.props.dateofpublish}</td>
                <td><PostControls author={this.props.author}/></td>
            </tr>
        )
    }
}