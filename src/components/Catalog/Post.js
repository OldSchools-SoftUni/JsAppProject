import React, {Component} from 'react';
import './Post.css';
import PostControls from './PostControls';

export default class Post extends Component {

    render() {

        return (
            <tr key={this.props.id}>
                <td>{this.props.number}</td>
                <td>{this.props.author}</td>
                <td>{this.props.context}</td>
                <td>{this.props.dateofpublish}</td>
                <td><PostControls author={this.props.author} id={this.props.id}/></td>
            </tr>
        )
    }
}