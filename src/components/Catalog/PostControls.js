import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PostControls extends Component {
    render() {
        let edit = <Link to={"/edit/" + this.props.id} className="btn btn-default">Edit</Link>;
        let deleted = <a href="" className="btn btn-default" onClick={this.props.onLeave}>Delete</a>;


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
                    {deleted}
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