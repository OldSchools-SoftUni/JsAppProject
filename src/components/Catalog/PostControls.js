import React, {Component} from 'react';
import {Link} from 'react-router';
import {deleted} from '../../models/requester';
import {reload} from '../../models/post'

export default class PostControls extends Component {
    render() {
        let edit = <Link to={"/edit/" + this.props.id} className="btn btn-default">Edit</Link>;
        // <a href="/catalog" className="btn btn-default" onClick={()=>reload('posts/' + this.props.id)}>Delete</a>;
        let del =<button to="/catalog" className="btn btn-default" type="submit" onClick={()=>reload('posts/' + this.props.id)}>Delete</button>


        let comment = <a href="" className="btn btn-default" onClick={this.props.onJoin}>Comment</a>;
        // if (this.props.canEdit) edit = <Link to={"/edit/" + this.props.teamId} className="btn btn-default">Edit</Link>;
        // if (this.props.ownTeam)
        //     deleted = <a href="" className="btn btn-default" onClick={this.props.onLeave}>Leave team</a>;
        // else
        //     comment = <a href="" className="btn btn-default" onClick={this.props.onJoin}>Join team</a>;
        if(sessionStorage.getItem('username')===this.props.author){
            return (
                <div>
                    {edit}
                    {del}
                    {comment}
                </div>
            )
        }else{
            return (
                <div>
                    {comment}
                </div>
            )
        }

    }
}